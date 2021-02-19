import React from 'react';

export default function TableProfitService(props) {

    const {result} = props;
    const header = ['Service', 'Stk.', 'Total Profit'];

    return (
        <div>
            <table className="table">
                <thead>
                  <tr>
                      {header.map(el => <th scope="col">{el}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {result.map(el => <td>{el}</td>)}
                  </tr>
                </tbody>
            </table>
        </div>
    )
}