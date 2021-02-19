import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import NewClientInput from "./NewClientInput";
import ModalEditClients from "./ModalEditClients";


export default function Clients(props){
    const {client, setClient} = props;

    const header = ['','Company','FirstName','Surname','Phone','Email','Address',''];

    function addClient(company,firstName,surname,phone,email,address,setCompany,setFirstName,setSurname,setPhone,setEmail,setAddress){
        let newList = [];
        if (client.length === 0) {newList = [
            {id: uuidv4(), company:company, firstName:firstName, surname:surname, phone:phone, email:email, address:address}
        ]} else {
            newList = [...client, {id: uuidv4(), company:company, firstName:firstName, surname:surname, phone:phone, email:email, address:address}];
        }
        setClient(newList);                             //perepisivaem nash massiv s novimi znachenijami
        setCompany('');
        setFirstName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setAddress('');
        setModal(false);
    }

    function deleteClient(id) {
        const newList = client.filter(el => el.id !== id);
        setClient(newList);
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // *********************************Edit Client ********************************
    function editClient(id, company, firstName, surname, phone, email, address) {
        const newList = client.map(el => {
            if (el.id === id) return {...el, company, firstName, surname, phone, email, address};
            return el;
        })
        setClient(newList);
    }

    return (
        <div>
            <div className="container px-0 mb-4">
                <div className="row gx-2">
                    <div className="col">
                        <div className="p-0.5 border bg-light">
                            <span className="col-2">
                                <button type="button" className="btn btn-primary m-4" onClick={toggle}>Create Client</button>

                                {/*<button type="button" className="btn btn-outline-primary m-4">Search</button>*/}

                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <NewClientInput toggle={toggle} modal={modal} addClient={addClient}/>

            <table className="table table-hover table-light border bg-light">
                <thead>
                <tr>
                    {header.map(el => <th scope="col">{el}</th>)}
                </tr>
                </thead>
                <tbody>
                {client.map((el, i) =>
                    <tr>
                        <th scope="row">{i}</th>
                        <td>{el.company}</td>
                        <td>{el.firstName}</td>
                        <td>{el.surname}</td>
                        <td>{el.phone}</td>
                        <td>{el.email}</td>
                        <td>{el.address}</td>

                        <ModalEditClients editClient={editClient} oneClient={el}/>
                        <button onClick={() => deleteClient(el.id)} type="button" className="btn btn-outline-danger mt-1 mb-1">Delete</button>

                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}