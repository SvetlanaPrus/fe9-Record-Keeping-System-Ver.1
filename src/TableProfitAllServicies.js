import React from 'react';

export default function TableProfitAllServicies(props) {

    const {total, sum} = props;
    const header = ['', 'Service', 'Stk.', 'Profit'];


    return (
        <div>
            <table className="table table-hover table-light border bg-light">
                <thead>
                <tr>
                    {header.map(el => <th scope="col">{el}</th>)}
                </tr>
                </thead>
                <tbody>
                    {total.map((el,i) =>
                        <tr>
                        <th scope="row">{i}</th>
                        <td>{el.nameOfProf}</td>
                        <td>{el.numOfProf}</td>
                        <td>{el.totOfProf}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h5 className="text-end pe-xl-5 text-primary"> Total Profit: {sum} </h5>
        </div>
    )
}