import React from 'react';

export default function SearchOrder(props) {

    const {header, order} = props;

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    {header.map(el => <th scope="col">{el}</th>)}
                </tr>
                </thead>
                <tbody>
                {order.map((el, i) =>
                    <tr>
                        <th scope="row">{i}</th>
                        <td>{el.date}</td>
                        <td>{el.nameOfClient}</td>
                        <td>{el.nameOfService}</td>
                        <td>{el.price}</td>
                        <td>{el.paid}</td>
                        <td>{el.debt}</td>
                        <td>{el.status}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}