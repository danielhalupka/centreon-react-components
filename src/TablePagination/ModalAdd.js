import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import ReportProblemIcon from '@material-ui/icons/ReportProblemOutlined';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Step1 from "./Step1";
import Step2 from "./Step2";
import { formValueSelector } from "redux-form";
import qs from 'qs';

const styles = theme => ({
  paper: {
    minWidth: '500px',
  },
  stepper: {
    backgroundColor: '#009fdf',
  },
  stepRoot: {
    color: theme.palette.common.white,
  },
  stepText: {
    fill:'#009fdf',
  },
  stepActive: {
    '& $stepText': {
      fill: theme.palette.common.white,
    }
  },
  errorWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '30px',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
  reportProblemIcon: {
    margin: '0px 5px 0px 10px',
    fontSize: 30,
    color: 'red',
  }
});

class ModalAdd extends React.Component {
  steps = [
    'Select provider',
    'Fill provider informations',
  ];

  state = {
    activeStep: 0,
    completed: {},
    providers: [],
    fetched: false,
    step2FormInputs: []
  };

  handleOpen = () => {
    const { centreonAxios } = this.props;

    centreonAxios("internal.php?object=centreon_host_discovery&action=providers")
      .get()
      .then(({ data }) => {
        const providers = data.result.map(item => {
          return {
            id: item.id,
            label: item.label,
            value: item.id
          }
        });
        this.setState({ providers, fetched: true });
      }).catch(() => {
        this.setState({ fetched: true });
      });
  }

  handleSubmitStep1 = () => {
    const { centreonAxios, provider } = this.props;

    centreonAxios(`internal.php?object=centreon_host_discovery&action=providerParameters&provider=${provider}`)
      .get()
      .then(({ data }) => {
        this.setState({
          step2FormInputs: data.result,
          activeStep: 1,
          completed: { 0: true }
        });
      });
  }

  handleSubmitStep2 = parameters => {
    const { centreonAxios, provider, onClose } = this.props;

    const name = parameters.name;
    delete parameters.name;

    const config = { headers: {'Content-Type': 'application/x-www-form-urlencoded' }};
    const postData = qs.stringify({ name, provider, parameters }, { parseArrays: false });

    centreonAxios(`internal.php?object=centreon_host_discovery&action=connectionParameters`)
      .post("", postData, config)
      .then(({ data }) => {
        onClose();
      });
  }

  render() {
    const { classes, provider, onClose, centreonAxios, ...other } = this.props;
    const { activeStep, completed, fetched, providers, step2FormInputs } = this.state;

    return (
      <Dialog
        classes={{paper: classes.paper}}
        onExit={onClose}
        onClose={onClose}
        onEnter={this.handleOpen}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <Stepper classes={{root: classes.stepper}} alternativeLabel activeStep={activeStep}>
          {this.steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    root: classes.stepRoot,
                    text: classes.stepText,
                    active: classes.stepActive,
                  }
                }}
              />
            </Step>
          ))}
        </Stepper>
        <DialogContent>
          {activeStep === 0 &&
            <>
              {providers.length > 0 ? (
                <Step1 providers={providers} onSubmit={this.handleSubmitStep1}/>
              ) : fetched && (
                <div className={classes.errorWrapper}>
                  <ReportProblemIcon classes={{root: classes.reportProblemIcon}}/>
                  <Typography classes={{root: classes.errorMessage}} color="secondary" align="center">
                    First, install plugin packs which provide host discovery rules
                  </Typography>
                </div>
              )}
            </>
          }
          {activeStep === 1 &&
            <Step2
              centreonAxios={centreonAxios}
              provider={provider}
              formInputs={step2FormInputs}
              onSubmit={this.handleSubmitStep2}
            />
          }
        </DialogContent>
      </Dialog>
    );
  }
}

const selector = formValueSelector('hostDiscoveryJobAdd');

export default connect(state => {
  const provider = selector(state, 'provider');
  return { provider };
})(withStyles(styles)(ModalAdd))