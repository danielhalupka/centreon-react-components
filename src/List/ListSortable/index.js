import React, {Component} from 'react';
import Checkbox from '../../Checkbox';
import './list-sortable.scss';

class ListSortable extends Component {
  render() {
    return (
      <table class="list list-sortable">
        <thead>
          <tr>
            <th scope="col">INDICATORS</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Checkbox label="ALL HOSTS" name="all-hosts" iconColor="green" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <Checkbox label="ALL HOSTS" name="all-hosts" iconColor="green" />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>
              <Checkbox label="ALL HOSTS" name="all-hosts" iconColor="green" />
            </td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ListSortable;