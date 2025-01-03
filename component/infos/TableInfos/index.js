import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from '../index.module.css';
import orderTable from '../../../utils/orderTable';
export default function TableInfos({ data, type }) {
  const [isData, setData] = useState(data);
  const [isSave] = useState(data);
  function filterName(e) {
    if (isSave) setData(isSave.filter((x) => x.profile.personaname.slice(0, e.length).toUpperCase().includes(e.toUpperCase())));
  }
  return (
    <div className={styles.container} >
      <Table className={styles.table}
        bordered
        striped={true}
      >
        <thead>
          <tr>
            <th>
              ico
            </th>
            <th>
              <Form.Control
                className={styles.form}
                type="text"
                placeholder="name"
                onChange={(e) => {
                  filterName(e.target.value);
                }}
              />
            </th>
            <th>
              <span onClick={(e) => orderTable('winRate', e, isSave, setData)}>
                {type.includes('Win') ? 'WinRate ↓' : 'LossRate ↓'}
              </span>
            </th>
            <th>
              <span onClick={(e) => orderTable('matches', e, isSave, setData)}>
                {'Matches ↓'}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {isData &&
            isData.map((player, i) => (
              <tr key={player.account_id}>
                <td>
                  <img src={player.avatarfull} alt={player.account_id} />
                </td>
                <td>{player.personaname}</td>
                <td>{player.win_rate.toFixed(1)}% </td>
                <td>{player.matches}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
