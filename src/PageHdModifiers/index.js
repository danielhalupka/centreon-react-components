import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import CustomTableHead from "../TablePagination/TableHead";
import CustomTablePagination from "../TablePagination/TablePagination";
import IconModify from "../Icon/IconModify";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DoneIcon from "@material-ui/icons/Done";
import ReportProblemIcon from "@material-ui/icons/ReportProblemOutlined";

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
  tableRow: {
    height: "36px"
  },
  tr: {
    backgroundColor: "#ffffff",
    color: theme.palette.common.white,
    zIndex: 1,
    position: "sticky",
    top: 0
  },
  checkboxColumn: {
    width: "60px"
  },
  checkboxRoot: {
    padding: "0px 12px"
  },
  sortLabel: {
    color: theme.palette.common.white,
    "&:focus": {
      color: theme.palette.common.white
    },
    "&:hover": {
      color: theme.palette.common.white,
      "& $icon": {
        opacity: 1,
        color: theme.palette.common.white
      }
    }
  },
  inputSearch: {
    backgroundColor: theme.palette.common.white,
    marginLeft: "30px"
  }
});

class PageHdModifiers extends Component {
  state = {
    modalActive: false
  };

  showModal = () => {
    this.setState({
      modalActive: true
    });
  };

  render() {
    const { classes, jobs } = this.props;
    const { modalActive } = this.state;

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper>
              <div>
                <Table aria-labelledby="tableTitle" padding="dense">
                  <CustomTableHead
                    columns={6}
                    numSelected={0}
                    rowCount={jobs ? jobs.length : 0}
                  />
                  <TableBody>
                    {jobs
                      ? jobs.map(
                          ({
                            status,
                            id,
                            alias,
                            connection_name,
                            generate_date,
                            duration,
                            items_discovered
                          }) => {
                            return (
                              <TableRow
                                className={classes.row}
                                style={{
                                  cursor:
                                    status == "finished"
                                      ? "pointer"
                                      : "inherit"
                                }}
                                hoverxs={4}
                                tabIndex={-1}
                                key={id}
                              >
                                <TableCell styles={{ root: classes.cellIcon }}>
                                  {status == "running" && (
                                    <AccessTimeIcon
                                      styles={{ root: classes.icon }}
                                    />
                                  )}
                                  {status == "finished" && (
                                    <DoneIcon styles={{ root: classes.icon }} />
                                  )}
                                  {status == "failed" && (
                                    <ReportProblemIcon
                                      styles={{ root: classes.icon }}
                                    />
                                  )}
                                </TableCell>
                                <TableCell>{alias}</TableCell>
                                <TableCell>{connection_name}</TableCell>
                                <TableCell>{generate_date}</TableCell>
                                <TableCell align="right">
                                  {duration}
                                </TableCell>
                                <TableCell align="right">
                                  {items_discovered}
                                </TableCell>
                              </TableRow>
                            );
                          }
                        )
                      : null}
                  </TableBody>
                </Table>
              </div>
              <CustomTablePagination />
            </Paper>

          { !modalActive && <Typography variant="caption">
              <IconModify /> Add modifier to discovered hosts
              <ButtonAdd onClick={this.showModal.bind(this)} />
            </Typography>}
          </Grid>

          {modalActive ? (
            <Grid
              item
              classes={{ root: classes.checkboxColumn, head: classes.head }}
            >
              <Paper>
                <HeaderContent label="Modifiers edition" />
                <FormDynamic />
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
