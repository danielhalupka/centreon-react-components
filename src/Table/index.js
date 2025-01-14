/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import classnames from 'classnames';
import IconAction from '../Icon/IconAction';
import TableCounter from './TableCounter';
import styles from './table.scss';
import Pagination from '../Pagination';

class Table extends Component {
  onHeaderFieldClicked = () => {};

  render() {
    const { fields, data, pagination } = this.props;
    return (
      <React.Fragment>
        <table className={classnames(styles.table, styles['table-striped'])}>
          <thead>
            <tr>
              {fields.map((field, index) => (
                <th
                  key={`tableHeader${index}`}
                  scope="col"
                  onClick={this.onHeaderFieldClicked.bind(this, field.key)}
                >
                  {field.label}
                </th>
              ))}
              {pagination ? (
                <th>
                  <TableCounter number="30" />
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((row, rowIndex) => (
                <tr key={`tableRow${rowIndex}`}>
                  {fields.map(({ type, key, values }, index) => {
                      let subComponent = (
                        <td key={`tableRow${rowIndex}Cell${index}`} />
                      );
                      switch (type) {
                        case 'icon':
                          const actionIconValue = values[row[key]];
                          subComponent = (
                            <td key={`tableRow${rowIndex}Cell${index}`}>
                              <IconAction
                                iconActionType={actionIconValue.icon}
                                iconColor={actionIconValue.color}
                              />
                            </td>
                          );
                          break;
                        case 'string':
                          subComponent = (
                            <td key={`tableRow${rowIndex}Cell${index}`}>
                              {row[key]}
                            </td>
                          );
                          break;
                        default:
                      }
                      return subComponent;
                    })}
                  {pagination ? (
                    <td key={`tablePagination${rowIndex}`} />
                    ) : null}
                </tr>
                ))
              : []}
          </tbody>
        </table>
        <div className={classnames(styles['text-center'])}>
          <Pagination
            pageCount={14}
            onPageChange={() => {}}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
