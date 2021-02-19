import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function NewServiceInput(props) {

    const {createService, modal, toggle} = props;

    const [newService, setNewService] = useState('')
    const [clientsPrice, setClientsPrice] = useState('')
    const [costPrice, setCostPrice] = useState('')
    const [provPrice, setProvPrice] = useState('')
    const [profit, setProfit] = useState('')

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Item</ModalHeader>
                <ModalBody>

                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Name Of Service:</label>
                            <input value={newService} onChange={(e) => setNewService(e.target.value)}
                                   type="text" className="form-control" id="service"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Clients Price:</label>
                            <input value={clientsPrice} onChange={(e) => setClientsPrice(e.target.value)}
                                   type="number" className="form-control" id="clientPrice"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cost Price:</label>
                            <input value={costPrice} onChange={(e) => setCostPrice(e.target.value)}
                                   type="number" className="form-control" id="costPrice"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Provider Price:</label>
                            <input value={provPrice} onChange={(e) => setProvPrice(e.target.value)}
                                   type="number" className="form-control" id="provPrice"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Profit::</label>
                            <input value={profit} onChange={(e) => setProfit(e.target.value)}
                                   type="number" className="form-control" id="provPrice"/>
                        </div>

                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => createService(setProvPrice,provPrice,newService,clientsPrice,costPrice,setNewService,setClientsPrice,setCostPrice,profit,setProfit)}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}













