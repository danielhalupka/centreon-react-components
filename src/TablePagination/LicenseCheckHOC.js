import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const generateClassName = createGenerateClassName({
  productionPrefix: 'licenseCheck',
});

const styles = {
  divWrapper: {
    height: 'calc(100vh - 82px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
  },
  paper: {
    backgroundColor: '#ffe6ec',
    width: '400px',
    textAlign: 'center',
  },
};

const withLicenseCheck = WrappedComponent => {
  class LicenseCheck extends Component {

    state = {
      isValid: false,
      fetched: false,
    };

    componentDidMount() {
      this.checkLicense();
    }

    checkLicense = () => {
      const { centreonAxios } = this.props;

      centreonAxios("internal.php?object=centreon_license_manager&action=licenseValid&productName=epp")
        .get()
        .then(({ data }) => {
          this.setState({
            isValid: data.success,
            fetched: true
          });
        }).catch(() => {
          this.setState({
            fetched: true
          });
        });
    }

    render() {
      const { children, classes, ...props } = this.props;
      const { isValid, fetched } = this.state;

      return (
        <>
          {fetched &&
            <JssProvider generateClassName={generateClassName}>
              {isValid ?
                <WrappedComponent
                  {...props}
                >
                  {children}
                </WrappedComponent>
              : (
                <div className={classes.divWrapper}>
                  <Paper className={classes.paper}>
                    <Typography component="p">
                      Your license is not valid
                    </Typography>
                  </Paper>
                </div>
              )}
            </JssProvider>
          }
        </>
      );
    }
  }

  return withStyles(styles)(LicenseCheck);
}

export default withLicenseCheck;
