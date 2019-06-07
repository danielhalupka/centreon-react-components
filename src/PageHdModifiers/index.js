import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

import Checkbox from '@material-ui/core/Checkbox';

import Select from '../AsyncSelect';
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CustomTablePagination from "../TablePagination/TablePagination";
import IconModify from "../Icon/IconModify";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';



import { arrayMove } from "react-sortable-hoc";
import SortableComponent from "../SortableList";
import FormTemplateFields from "../FormTemplate";
import ContainedButtonPrimary from "../Button/ButtonContained";

import { Chip } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";


import Grid from "@material-ui/core/Grid";

import { HeaderContent, FormDynamic, ButtonAdd } from "../";

const styles = theme => ({
  '@global': {
    body: {
      li :{
        listStyleType: 'none'
      },
    },
  },
  whiteIcon: {
    fill: "#FFFFFF",
    position: "relative",
    top: "10px"
  },
  tableRow: {
    height: '36px'
  },
  smallRow: {
    width: "360px"
  },
  head: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    zIndex: 1,
    position: 'sticky',
    top: 0,
  },
  checkboxColumn: {
    width: '60px'
  },
  checkboxRoot: {
    padding: '0px 12px',
  },
  sortLabel: {
    color: theme.palette.common.white,
    '&:focus': {
      color: theme.palette.common.white,
    },
    '&:hover': {
      color: theme.palette.common.white,
      '& $icon': {
        opacity: 1,
        color: theme.palette.common.white,
      },
    },
  },
  inputSearch: {
    backgroundColor: theme.palette.common.white,
    marginLeft: '30px',
  },
  tr: {
    backgroundColor: "#ffffff",
    color: "white",
    zIndex: 1,
    position: "sticky",
    top: 0
  },

  formControl: {
    margin: '0px',
    minWidth: "calc(100% - 15px)"
  },
  formModifier: {
    maxWidth: '350px',
    padding: '10px',
  },
  inputForm: {
    height: "2.5rem",
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  inputCustom: {
    '& input': {
      padding: '9px',
    }
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  selectLabel: {
    position: "relative",
    left: "3px",
    top: "17px",
    marginTop: "0px",
    display: "block"
  },
  button: {
    margin: '8px 0'
  },
  input: {
    display: "none"
  },
  styledChip: {
    margin : '5px',
    backgroundColor:  '#009fdf',
    color: '#fff',
    '&:hover':{
      backgroundColor: '#007AB8',
      color: '#fff',
    },
    '&:focus':{
      backgroundColor: '#007AB8',
      color: '#fff',
    },
  },
  chipAvatarBlue: {
    backgroundColor: '#007AB8',
    color: '#fff',
    fontWeight: '600',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btnCentreonBlue: {
    marginTop: '10px',
    backgroundColor:  '#009fdf',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#007AB8',
    },
    '&:focus': {
      backgroundColor: '#007AB8',
    }
  }
});
class PageHdModifiers extends Component {

  state = {
    modalActive: false,
    modifiersExist: false,
    labelWidth: 4,
    targ: null,
    source: null,
    otherSource: null,
    regex: null,
    currentEdit: null,
    activeForm: null,
    activePreviewButton: false,
    activeSaveButton: false,
    listTitle: null,
    modifiersList: [],
    association: [
      {
        id: 1,
        title: 'Association',
        placeholder: 'Select target property',
        input_type: 'dropdown',
        values: [
          "Target 1",
          "Target 2",
          "Target 3",
          "Target 4"
        ],
        forId: 'id1',
        required: true
      },
      {
        id: 2,
        title: 'Association',
        placeholder: 'Select source property',
        input_type: 'dropdown',
        values: [
          "Source 1",
          "Source 2",
          "Source 3",
          "Source 4"
        ],
        forId: 'id2',
        required: true
      },
      {
        id: 3,
        title: 'Association',
        placeholder: 'Select others source property',
        input_type: 'dropdown',
        values: [
          "Other source 1",
          "Other source 2",
          "Other source 3",
          "Other source 4"
        ],
        forId: 'id3',
        required: true
      },
    ],
    combineMultipleProperties: [
      {
        id: 1,
        title: 'Combination',
        placeholder: 'Select targer property',
        input_type: 'dropdown',
        values: [
          "Target 1",
          "Target 2",
          "Target 3",
          "Target 4"
        ],
        forId: 'id1',
        required: true
      },
      {
        id: 2,
        title: 'Combination',
        placeholder: 'Define regex pattern',
        input_type: 'text',
        value: 'Regex pattern',
        forId: 'id2',
        required: true
      },
      {
        id: 3,
        title: 'Combination',
        placeholder: 'Validate pattern',
        input_type: 'dropdown',
        values: [
          "Source pattern 1",
          "Source pattern 2",
          "Source pattern 3",
          "Source pattern 4"
        ],
        forId: 'id3',
        required: true
      },
    ],
    fieldsInclusion: [
      {
        id: 1,
        title: 'Inclusion',
        placeholder: 'Select source property',
        input_type: 'dropdown',
        values: [
          "Source 1",
          "Source 2",
          "Source 3",
          "Source 4"
        ],
        forId: 'id1',
        required: true
      },
      {
        id: 2,
        title: 'Inclusion',
        placeholder: 'Define regex pattern',
        input_type: 'text',
        value: 'Regex pattern',
        forId: 'id2',
        required: true
      },
    ],
    fieldsExclusion: [
      {
        id: 1,
        title: "Exclusion",
        placeholder: 'Select "Exclusion" in the list of operations',
        input_type: "dropdown",
        values: ["Exclusion 1", "Exclusion 2", "Exclusion 3", "Exclusion 4"],
        forId: "id4",
        required: true
      },
      {
        id: 2,
        title: 'Exclusion',
        placeholder: 'Define regex pattern',
        input_type: 'text',
        value: 'Regex pattern',
        forId: 'id2',
        required: true
      },
    ],
    fieldsLowercase: [
      {
        id: 1,
        title: "Lower Case",
        placeholder: 'Select target property',
        input_type: "dropdown",
        values: ["Lowercase 1", "Lowercase 2", "Lowercase 3", "Lowercase 4"],
        forId: "id1",
        required: true
      }
    ],
    fieldsUppercase: [
      {
        id: 1,
        title: "Upper Case",
        placeholder: 'Select target property',
        input_type: "dropdown",
        values: ["Uppercase 1", "Uppercase 2", "Uppercase 3", "Uppercase 4"],
        forId: "id5",
        required: true
      }
    ],
    fieldsCapitalize: [
      {
        id: 1,
        title: "Word Capitalizer",
        placeholder: 'Select target property',
        input_type: "dropdown",
        values: ["Capitalize 1", "Capitalize 2", "Capitalize 3", "Capitalize 4"],
        forId: "id5",
        required: true
      }
    ],
    itemsList: [],
    tempActiveList: false
  };

  handleChange = targ => event => {
    let { title }= this.state;
    let source = event.target.value;
    console.log(source);
    this.setState({
      targ: source,
      activeSaveButton: true,
      listTitle: `${title} => ${targ}`
    });
    return source
  };

  activeModifierForm = (currentmodifier) => {
    let { targ }= this.state;
    let text = currentmodifier[0].title;
    let number = Math.floor(Math.random() * 10);
    this.setState({
      activeForm: currentmodifier,
      targ,
      title: `${text} id ${number}`
    });

    console.log(currentmodifier)
  };

  activeSaveButton = () => {
    this.setState({
      activeSaveButton: true
    });
  };

  outputList = () => {
    let { name, modifiersList, title, fieldsInclusion }= this.state;
    let text = fieldsInclusion[0].title;
    let number = Math.floor(Math.random() * 10);
    let modifiersArr = modifiersList;
    modifiersArr.push(title.toString());
    this.setState({
      name,
      tempActiveList: true,
      activePreviewButton: true,
      activeForm: null,
      activeSaveButton: false,
      modifiersList: modifiersArr,
      title: number + text + ' - ' + name
    });
    console.log(modifiersArr);
  };

  onSortModifier = ({ oldIndex, newIndex }) => {
    let { modifiersList } = this.state;
    modifiersList = arrayMove(modifiersList, oldIndex, newIndex);
    this.setState({
      modifiersList
    });
  };

  onDeleteModifier = index => {
    let { modifiersList } = this.state;
    modifiersList.splice(index, 1);
    this.setState({
      modifiersList
    });
  };

  onEditModifier = (index) => {
    this.setState({
      currentEdit: index,
    });
  };
  onCloseEditingForm = () => {
    this.setState({
      currentEdit: null,
    });
  }


  showModal = () => {
    this.setState({
      modalActive: true
    });
  };
  onHideModal = () => {
    let { modifiersList }= this.state;
    let modifiersArr = modifiersList;
    this.setState({
      modalActive: false,
      modifiersExist: true,
      modifiersList: modifiersArr,
    });
  };

  render() {
    const { classes, jobs, hideModal, ...rest } = this.props;
    const { 
      modalActive, 
      modifiersExist,
      association,
      combineMultipleProperties,
      fieldsInclusion,
      fieldsExclusion,
      fieldsLowercase,
      fieldsUppercase,
      fieldsCapitalize,
      activeForm,
      activeSaveButton,
      activePreviewButton,
      tempActiveList,
      modifiersList,
      currentEdit,
      title,
      listTitle} = this.state;
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs>
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                padding="dense"
              >
                  <TableHead>
                    <TableRow
                      classes={{root: classes.tableRow}}
                    >
                      <TableCell padding="checkbox" classes={{root: classes.checkboxColumn, head: classes.head}}>
                        <Checkbox
                          classes={{ root: classes.checkboxRoot }}
                          checked={2}
                        />
                      </TableCell>

                        <TableCell classes={{ head: classes.head}} >Hosts</TableCell>
                        <TableCell classes={{ head: classes.head}} >Templates</TableCell>
                        <TableCell classes={{ head: classes.head, root: classes.smallRow }} >
                        { !modalActive && <span>
                          <IconModify className={classes.whiteIcon} /> {modifiersExist ? `Modify or add new` : `Add`} modifiers to discovered jobs
                          <ButtonAdd onClick={this.showModal} />
                        </span>}
                        </TableCell>
                    </TableRow>
                  </TableHead>
                <TableBody>
                  {jobs.map(host => {
                      return (
                        <TableRow
                          className={classes.row}
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={host.id}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              onClick={event => this.handleClick(event, host.id)}
                              classes={{
                                root: classes.checkboxRoot,
                                checked: classes.checkboxChecked,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            scope="row"
                            padding="none"
                          >
                            <div className={classes.infoIconContainer }>
                              <IconButton
                                classes={{ root: classes.infoIconButtonRoot }}
                                aria-label="Get host detailed information"
                              >
                                <InfoIcon classes={{ root: classes.infoIconRoot }} />
                              </IconButton>
                              {host.name}
                            </div>
                          </TableCell>
                          <TableCell classes={{ root: classes.selectTemplateCell }} align="right">
                              <Select
                                native
                                input={
                                  <OutlinedInput
                                    name="value"
                                  />
                                }
                              >
                                <option value="" />
                                <option value={host.selectedTemplates[0]}>{host.selectedTemplates[0]}</option>
                                <option value={host.selectedTemplates[1]}>{host.selectedTemplates[1]}</option>
                                <option value={host.selectedTemplates[2]}>{host.selectedTemplates[2]}</option>
                              </Select>
                          </TableCell>
                          <TableCell >
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
            <CustomTablePagination
              component='div'
              rowsPerPageOptions={2}
              colSpan={3}
              count={15}
              rowsPerPage={2}
              page={2}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
          <div className={classes.footerButtons}>
            <div>
              <Button onClick={this.handleBack} variant="contained" size="small">
                BACK
              </Button>
            </div>
            <div className={classes.saveButtons}>
              <Button onClick={() => this.handleSave(false)}  variant="contained" size="small" classes={{root: classes.saveButton}}>
                SAVE
              </Button>
              <Button onClick={() => this.handleSave(true)}  variant="contained" size="small" classes={{root: classes.saveButton}}>
                SAVE & MONITOR
              </Button>
            </div>
          </div>
          </Grid>

          {modalActive ? (
            <Grid
              item
              classes={{ root: classes.checkboxColumn, head: classes.head }}
            >
              <Paper>
                <HeaderContent label="Modifiers edition" />
                <div>
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={association[0].title}
                    onClick={() => this.activeModifierForm(association)}
                  />
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={combineMultipleProperties[0].title}
                    onClick={() => this.activeModifierForm(combineMultipleProperties)}
                  />
                  </div>

                  <div>
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={fieldsInclusion[0].title}
                    onClick={() => this.activeModifierForm(fieldsInclusion)}
                  />
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={fieldsExclusion[0].title}
                    onClick={() => this.activeModifierForm(fieldsExclusion)}
                  />
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={fieldsLowercase[0].title}
                    onClick={() => this.activeModifierForm(fieldsLowercase)}
                  />
                </div>
                <div>
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={fieldsUppercase[0].title}
                    onClick={() => this.activeModifierForm(fieldsUppercase)}
                  />
                  <Chip
                    avatar={<Avatar className={classes.chipAvatarBlue} >+</Avatar>}
                    className={classes.styledChip}
                    label={fieldsCapitalize[0].title}
                    onClick={() => this.activeModifierForm(fieldsCapitalize)}
                  />
                </div>

                {tempActiveList ? (
                    <SortableComponent
                      items={modifiersList}
                      value={listTitle}
                      onSort={this.onSortModifier}
                      onDelete={this.onDeleteModifier}
                      editModifier={this.onEditModifier}
                      closeEditingForm={this.onCloseEditingForm}
                      activeIndex={currentEdit}
                    />
                ) : null}
                <form className={classes.formModifier} autoComplete="on">

                  {activeForm && (
                  <React.Fragment>
                    <FormTemplateFields  data={activeForm} onChange={this.handleChange('value')} modifier={title}/>
                    <ContainedButtonPrimary
                        className={classes.btnCentreonBlue}
                        variant="contained"
                        label="Add this modifier"
                        onClick={this.outputList}
                      />
                  </React.Fragment>

                  )}
                  {!activeForm &&
                    <div>
                      {activePreviewButton ? (
                        <ContainedButtonPrimary
                          className={classes.btnCentreonBlue}
                          label="Preview"
                        />
                      ) : null}
                      {modifiersList.length > 0  || activeSaveButton ? (
                        <ContainedButtonPrimary
                          className={classes.btnCentreonBlue}
                          variant="contained"
                          label="Save Modifiers"
                          onClick={this.onHideModal}
                          {...rest}
                        />
                      ) : (
                        <ContainedButtonPrimary
                          className={classes.btnCentreonBlue}
                          variant="contained"
                          color="secondary"
                          disabled
                          className={classes.button}
                          label="Save Modifiers"
                        />
                      )}
                    </div>
                  }
                </form>

              </Paper>
            </Grid>
          ) : null}
        </Grid>
      </React.Fragment>
    );
  }
}

PageHdModifiers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageHdModifiers);
