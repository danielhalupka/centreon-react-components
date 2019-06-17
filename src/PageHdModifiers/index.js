/*
 * Copyright 2005 - 2019 Centreon (https://www.centreon.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For more information : contact@centreon.com
 *
 */

import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import IconCloseRight  from "../Icon/IconCloseRight/index";

import { arrayMove } from "react-sortable-hoc";
import SortableComponent from "../SortableList";
import FormTemplateFields from "../FormTemplate";
import ContainedButtonPrimary from "../Button/ButtonContained";
import Grid from "@material-ui/core/Grid";
import { HeaderContent } from "../";

const styles = theme => ({
  tableRow: {
    height: '36px',
    '&:nth-child(even)': {
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
  formModifier: {
    maxWidth: '600px',
    padding: '10px',
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
  btnCentreon: {
    margin: '10px 10px 10px 0',
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
  marginTop30: {
    marginTop : "30px",
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
    targ: null,
    source: null,
    otherSource: null,
    regex: null,
    validRegex: null,
    exclusionVal: null,
    uppercaseVal: null,
    lowercaseVal: null,
    wcapVal: null,
    currentEdit: null,
    activeForm: null,
    activePreviewButton: false,
    activeSaveButton: false,
    listTitle: null,
    confirm: false,
    modifiersList: [],
    initialForm: [
      {
        id: 1,
        title: 'Modifier',
        placeholder: 'Select target property',
        input_type: 'dropdown',
        values: [
          "Association",
          "Combination",
          "Inclusion",
          "Exclusion",
          "Lower Case",
          "Upper Case",
          "Word Capitalizer",
        ],
        forId: 'id1',
        required: true
      }
    ],
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
    combination: [
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
    inclusion: [
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
    exclusion: [
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
    lowercase: [
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
    uppercase: [
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
    wordcapitalizer: [
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

  handleChange =  event => {
    let selected = event.target.value;
    switch (selected.substring(0, 3).toLowerCase()) {
      case 'sou':
        this.setState({
          source: selected,
        });
        console.log(selected);
        break;
      case 'tar':
        this.setState({
          targ: selected,
        });
        console.log(selected);
        break;
      case 'oth':
        this.setState({
          otherSource: selected,
        });
        console.log(selected);
        break;
      case 'val':
        this.setState({
          validRegex: selected,
        });
        console.log(selected);
        break;
      case 'exc':
        this.setState({
          exclusionVal: selected,
        });
        console.log(selected);
        break;
      case 'upp':
        this.setState({
          uppercaseVal: selected,
        });
        console.log(selected);
        break;
      case 'low':
        this.setState({
          lowercaseVal: selected,
        });
        console.log(selected);
        break;
      case 'cap':
        this.setState({
          wcapVal: selected,
        });
        console.log(selected);
        break;
      default:
        this.setState({
          regex: selected,
        });
        console.log(selected);
    }
    this.setState({
      activeSaveButton: true,
    });

  };

  handleChangeForm = event => {
    let eventValue = event.target.value.toLowerCase();
    let currentform = eventValue.replace(/\s/g, '');

    let text = currentform;
    let textUpdated = text.charAt(0).toUpperCase() + text.slice(1)

    console.log('form to show: ' + currentform);
    console.log('form to show: ' + this.state[currentform]);

    this.setState({
      activeForm: this.state[currentform],
      listTitle: textUpdated,
      targ: null,
      source: null,
      otherSource: null,
      regex: null,
      validRegex: null,
      uppercaseVal: null,
      lowercaseVal: null,
      wcapVal: null,
    });
  };


  activeSaveButton = () => {
    this.setState({
      activeSaveButton: true
    });
  };

  outputList = () => {
    let {  modifiersList, listTitle, targ , source, otherSource, regex, validRegex, exclusionVal, uppercaseVal, lowercaseVal, wcapVal }= this.state;
    let newtitle = (listTitle ? listTitle : '' ) + (targ ? ' -> ' + targ: '') + ( source ? ' -> ' + source: '') + ( otherSource ? ' -> ' + otherSource: '') + ( regex ? ' -> ' + regex: '')  + ( validRegex ?' -> ' + validRegex: '')  + (exclusionVal ? ' -> ' + exclusionVal : '') + (uppercaseVal ? ' -> ' + uppercaseVal : '') + (lowercaseVal ? ' -> ' + lowercaseVal : '') + (wcapVal ? ' -> ' + wcapVal : '');

    let modifiersArr = modifiersList;
    modifiersArr.push(newtitle.toString());
    this.setState({
      tempActiveList: true,
      activePreviewButton: true,
      activeForm: null,
      activeSaveButton: false,
      modifiersList: modifiersArr,
      confirm: false,
    });
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
    const { classes, jobs} = this.props;
    const {
      modalActive,
      activeForm,
      initialForm,
      activeSaveButton,
      tempActiveList,
      modifiersList,
      currentEdit,
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
                      {`Edit modifiers`}
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
                  label="Modifiers edition"
                  close={<IconCloseRight onClick={this.onHideModal}/>} />
                <form className={classes.formModifier} autoComplete="on">
                  <Typography variant="caption">
                      <h3>Add modifier:</h3>
                  </Typography>
                  <FormTemplateFields  data={initialForm} onChange={this.handleChangeForm}  />
                  {activeForm && (
                    <>
                      <Typography variant="caption" className={classes.marginTop30}>
                          <h3>
                            {`Veuillez selectionner les paramètres de votre modifier: `}
                          </h3>
                      </Typography>
                      <FormTemplateFields  data={activeForm} onChange={this.handleChange}/>
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
                          <ContainedButtonPrimary
                            className={classes.btnCentreon}
                            variant="contained"
                            color="secondary"
                            disabled
                            label="Save Modifiers"
                          />
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
