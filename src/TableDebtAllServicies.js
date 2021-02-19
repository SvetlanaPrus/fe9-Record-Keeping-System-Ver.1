import React from 'react';

export default function TableDebtAllServicies(props) {

    const {debtOverview,debSum} = props;
    const header = ['', 'Client', 'Service', 'Debt'];


    return (
        <div>
            <table className="table table-hover table-light border bg-light">
                <thead>
                <tr>
                    {header.map(el => <th scope="col">{el}</th>)}
                </tr>
                </thead>
                <tbody>
                {debtOverview.map((el,i) =>
                    <tr>
                        <th scope="row">{i}</th>
                        <td>{el.nameOfClient}</td>
                        <td>{el.nameOfService}</td>
                        <td>{el.debt}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <h5 className="text-end pe-xl-5 text-danger"> Total Debt: {debSum}</h5>
        </div>
    )
}