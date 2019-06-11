import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Title  from "../Title";
import Typography from '@material-ui/core/Typography';
import TitleCustom  from "../Title/TitleCustomMui";

import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

import Checkbox from '@material-ui/core/Checkbox';

import Select from '../AsyncSelect';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


import Button from "@material-ui/core/Button";
import CustomTablePagination from "../TablePagination/TablePagination";
import IconModify from "../Icon/IconModify";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import IconCloseRight  from "../Icon/IconCloseRight/index";

import { arrayMove } from "react-sortable-hoc";
import SortableComponent from "../SortableList";
import FormTemplateFields from "../FormTemplate";
import ContainedButtonPrimary from "../Button/ButtonContained";

import { Chip } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import Grid from "@material-ui/core/Grid";
import { HeaderContent } from "../";

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
    top: "2px"
  },
  whiteIconSmall: {
    fill: "#FFFFFF",
    position: "relative",
    top: "8px",
  },
  tableRow: {
    height: '36px',
    '&:nth-child(even) ': {
      backgroundColor: 'rgba(0, 162, 220, .3)',
    },
  },
  smallRow: {
    width: "336px",
    textAlign: 'right',
  },
  head: {
    backgroundColor: '#009fdf',
    color: theme.palette.common.white,
    zIndex: 1,
    position: 'sticky',
    top: 0,
  },
  headText: {
    lineHeight: '28px',
    verticalAlign: 'middle',
  },
  checkboxColumn: {
    width: '60px'
  },
  checkboxRoot: {
    padding: '0px 12px',
  },
  checkboxChecked: {
    color: '#FFFFFF!important',
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
    maxWidth: '400px',
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
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  styledChip: {
    margin : '5px',
    backgroundColor:  'rgba(0, 162, 220, .3)',
    color: 'rgba(0, 0, 0, 0.87)',
    '&:hover':{
      backgroundColor: '#009fdf',
      color: '#fff',
    },
    '&:focus':{
      backgroundColor: '#009fdf',
      color: '#fff',
    },
  },
  darkenBlueChip: {
    margin : '5px',
    backgroundColor:  '#007AB8',
    color: '#fff',
    '&:hover':{
      backgroundColor: '#004c72',
      color: '#fff',
    },
    '&:focus':{
      backgroundColor: '#004c72',
      color: '#fff',
    },
  },
  chipAvatarBlue: {
    backgroundColor: '#009fdf',
    color: '#fff',
    fontWeight: '600',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  btnCentreonBlue: {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor:  '#009fdf',
    color: '#ffffff',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#007AB8',
    },
    '&:focus': {
      backgroundColor: '#007AB8',
    }
  },
  btnCentreonRed: {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor:  '#FD0A27',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#c40118',
    },
    '&:focus': {
      backgroundColor: '#c40118',
    }
  },
  btnCentreonGreen: {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor:  '#83B83B',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#587C1F',
    },
    '&:focus': {
      backgroundColor: '#587C1F',
    }
  },
  btnCentreonGrey: {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor:  '#CCCCCC',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#6B6E73',
    },
    '&:focus': {
      backgroundColor: '#6B6E73',
    }
  },
  marginLeft: {
    marginLeft: "10px",
    marginTop : "0px",
  },
  marginTop: {
    marginTop : "10px!important",
  },
  paddingSmall: {
    padding: '2px 10px',
  },
  footerButtons: {
    marginTop: '10px'
  },
  saveButtons: {
    textAlign: 'right',
  },
  headerContent: {
    position: 'relative',
  }
});
class PageHdModifiers extends Component {
  state = {
    modalActive: false,
    labelWidth: 4,
    targ: "target",
    source: "source",
    otherSource: null,
    regex: null,
    currentEdit: null,
    activeForm: null,
    activePreviewButton: false,
    activeSaveButton: false,
    listTitle: null,
    confirm: false,
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
    let { title, targ , source}= this.state;

    let sourc = event.target.value;
    console.log(sourc);
  
    this.setState({
      targ: sourc,
      source: sourc,
      activeSaveButton: true,
    });

  };

  activeModifierForm = (currentmodifier) => {
    let { targ, source }= this.state;
    let text = currentmodifier[0].title;
    this.setState({
      activeForm: currentmodifier,
      targ,
      source,
      title: `${text} -> ${targ} -> ${source}`,
      listTitle: text,
    });

    console.log(currentmodifier)
  };

  activeSaveButton = () => {
    this.setState({
      activeSaveButton: true
    });
  };

  outputList = () => {
    let {  modifiersList, title }= this.state;
    let modifiersArr = modifiersList;
    modifiersArr.push(title.toString());
    this.setState({
      tempActiveList: true,
      activePreviewButton: true,
      activeForm: null,
      activeSaveButton: false,
      modifiersList: modifiersArr,
      confirm: false,
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
      modifiersList: modifiersArr,
      confirm: false,
    });
  };

  confirmDelete = () => {
    this.setState({
      confirm: true,
    });
  };

  dontDelete = () => {
    this.setState({
      confirm: false,
    });
  };

  onDeleteModifiers = () => {
    this.setState({
      modifiersList: [],
    });
  };

  render() {
    const { classes, jobs, hideModal, ...rest } = this.props;
    const {
      modalActive,
      association,
      combineMultipleProperties,
      fieldsInclusion,
      fieldsExclusion,
      fieldsLowercase,
      fieldsUppercase,
      fieldsCapitalize,
      activeForm,
      activeSaveButton,
      tempActiveList,
      modifiersList,
      currentEdit,
      title,
      confirm,
      listTitle} = this.state;
    return (
      <>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.root}>
              <Grid container spacing={24} className={classes.footerButtons}>
                <Grid item xs>
                  <TitleCustom color="#009FDF" fsize="12" label="Discovered hosts with WMware Virtual Machine" />
               </Grid>
                <Grid item xs className={classes.saveButtons}>
                { !modalActive && <span>
                    <Button
                      variant="contained"
                      className={`${classes.btnCentreonBlue} ${classes.paddingSmall}`}
                      onClick={this.showModal}
                      >
                      {`${modifiersList.length > 0 ? `Modify or add new` : `Add`} modifiers to discovered jobs  `}&nbsp;
                      <IconModify className={classes.whiteIcon} />
                    </Button>
                </span>}
                </Grid>
              </Grid>
              <div className={classes.tableWrapper}>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  padding="dense"
                >
                    <TableHead>
                      <TableRow
                        className={classes.tableRow}
                      >
                        <TableCell padding="checkbox" className={`${classes.checkboxColumn} ${classes.head}`}>
                          <Checkbox
                            className={`${classes.checkboxRoot}  ${classes.checkboxChecked}`}
                            checked={2}
                          />
                        </TableCell>
                        <TableCell className={classes.head} >
                        <Grid container spacing={24}>
                          <Grid item className={`${classes.headText} ${classes.paddingSmall}`} >Hosts</Grid>
                          <Grid item xs className={classes.paddingSmall}>
                            <Paper className={classes.root}>
                              <InputBase
                                className={classes.input}
                                placeholder="Search Hosts"
                                inputProps={{ 'aria-label': 'Search Hosts' }}
                              />
                              <IconButton className={`${classes.iconButton} ${classes.paddingSmall}`} aria-label="Search">
                                <SearchIcon />
                              </IconButton>
                            </Paper>
                          </Grid>
                        </Grid>
                        </TableCell>
                        <TableCell className={classes.head} >Templates</TableCell>
                        <TableCell className={`${classes.head} ${classes.smallRow}`} >
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  <TableBody>
                    {jobs.map(host => {
                        return (
                          <TableRow
                            className={classes.tableRow}
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={host.id}
                          >
                            <TableCell padding="none">
                              <Checkbox
                                onClick={event => this.handleClick(event, host.id)}
                                className={`${classes.checkboxRoot}`}
                              />
                            </TableCell>
                            <TableCell
                              scope="row"
                              padding="none"
                            >
                              <div className={classes.infoIconContainer }>
                                <IconButton
                                  className={`${classes.infoIconButtonRoot} ${classes.paddingSmall}`}
                                  aria-label="Get host detailed information"
                                >
                                  <InfoIcon className={classes.infoIconRoot} />
                                </IconButton>
                                {host.name}
                              </div>
                            </TableCell>
                            <TableCell className={classes.selectTemplateCell} align="right">
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
            <Grid container spacing={24} className={classes.footerButtons}>
              <Grid item xs>
                <Button onClick={this.handleBack} variant="contained" size="small">
                  BACK
                </Button>
              </Grid>
              <Grid item xs className={classes.saveButtons}>
                <Button onClick={() => this.handleSave(false)}  variant="contained" size="small" className={classes.saveButton}>
                  SAVE
                </Button>
                <Button onClick={() => this.handleSave(true)}  variant="contained" size="small" className={`${classes.saveButton} ${classes.marginLeft}`}>
                  SAVE & MONITOR
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {modalActive ? (
           <Grid
              item
            >
             <Paper>
                <HeaderContent  className={classes.headerContent}
                  icon={ <IconModify className={classes.whiteIconSmall} />} label="Modifiers edition"
                  close={<IconCloseRight onClick={this.onHideModal}/>} />
                <div className={classes.marginTop}>
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

                <form className={classes.formModifier} autoComplete="on">
                  {activeForm && (
                  <>
                    <FormTemplateFields  data={activeForm} onChange={this.handleChange('value')} modifier={listTitle}/>
                    <ContainedButtonPrimary
                        className={classes.btnCentreonBlue}
                        variant="contained"
                        label="Add this modifier"
                        onClick={this.outputList}
                      />
                  </>

                  )}

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
                  {!activeForm &&
                    <>
                    <div>
                      {modifiersList.length > 0  ? (
                        <ContainedButtonPrimary
                          className={classes.btnCentreonBlue}
                          label="Preview"
                        />
                      ) : null}
                      {modifiersList.length > 0  || activeSaveButton ? (
                        <ContainedButtonPrimary
                          className={classes.btnCentreonGreen}
                          variant="contained"
                          label="Save Modifiers"
                          onClick={this.onHideModal}
                        />
                      ) : (
                        <>
                          <ContainedButtonPrimary
                            className={`${classes.button}`}
                            variant="contained"
                            color="secondary"
                            disabled
                            label="Save Modifiers"
                          />
                        </>
                      )}


                      {modifiersList.length > 0  || activeSaveButton ? (
                        <div>
                          {confirm ? (
                            <>
                              <ContainedButtonPrimary
                                className={classes.btnCentreonGrey}
                                variant="contained"
                                color="secondary"
                                label="Don't delete"
                                onClick={this.dontDelete}
                              />
                              <ContainedButtonPrimary
                                className={classes.btnCentreonRed}
                                variant="contained"
                                color="secondary"
                                label="Confirm delete"
                                onClick={this.onDeleteModifiers}
                              />
                            </>
                          ) : (
                            <ContainedButtonPrimary
                                className={classes.btnCentreonBlue}
                                variant="contained"
                                color="secondary"
                                label="Delete all modifiers"
                                onClick={this.confirmDelete}
                              />
                          )}
                        </div>
                      ) : null}


                    </div>
                    </>
                  }
                </form>
              </Paper>
            </Grid>
          ) : null}
        </Grid>
      </>
    );
  }
}

PageHdModifiers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageHdModifiers);
