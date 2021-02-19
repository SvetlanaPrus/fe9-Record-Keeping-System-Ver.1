import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import NewServiceInput from "./NewServiceInput";
import ModalEditService from "./ModalEditService";

export default function Service(props) {

    const {service, setService} = props;
    const header = ['','Name of Service', 'Clients Price', 'Cost Price','Provider Price', 'Profit', ''];

    function deleteService(id) {
        const newList = service.filter(el => el.id !== id);
        setService(newList);
    }

    // *************************** Create Service **********************

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function createService(setProvPrice,provPrice,newService,clientsPrice,costPrice,setNewService,setClientsPrice,setCostPrice,profit, setProfit){
        let newList = [];
        if(service.length === 0) {
            newList = [{id: uuidv4(), serviceName:newService, clientPrice:clientsPrice, costPrice:costPrice, providerPrice:provPrice, profit:profit}]
        } else {
            newList = [...service, {id: uuidv4(), serviceName:newService, clientPrice:clientsPrice, costPrice:costPrice, providerPrice:provPrice, profit:profit}];
        }
        setService(newList);
        setNewService('');
        setClientsPrice('');
        setCostPrice('');
        setProvPrice('');
        setProfit('');
        setModal(false);
    }

    // ********************************* Edit Service ********************************

    function editService(id, serviceName,clientPrice,costPrice,providerPrice,profit) {
        const newList = service.map(el => {
            if (el.id === id) return {...el, serviceName,clientPrice,costPrice,providerPrice,profit};
            return el;
        })
        setService(newList);
    }

    return (
        <div>
            <div className="container px-0">
                <div className="row gx-2 mb-4">
                    <div className="col">
                        <div className="p-0.5 border bg-light">
                            <button type="button" className="btn btn-primary m-4" onClick={toggle}> Create Service </button>
                        </div>
                    </div>
                </div>
            </div>
            <NewServiceInput toggle={toggle} modal={modal} createService={createService}/>

            <table className="table table-hover table-light border bg-light">
                <thead>
                <tr>
                    {header.map(el => <th scope="col">{el}</th>)}
                </tr>
                </thead>
                <tbody>
                    {service.map((el, i) =>
                        <tr>
                            <th scope="row">{i}</th>
                            <td>{el.serviceName}</td>
                            <td>{el.clientPrice}</td>
                            <td>{el.costPrice}</td>
                            <td>{el.providerPrice}</td>
                            <td>{el.profit}</td>
                            <ModalEditService editService={editService} oneService={el}/>
                            <button onClick={() => deleteService(el.id)}
                                    type="button" className="btn btn-outline-danger mt-1 mb-1"> Delete </button>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}