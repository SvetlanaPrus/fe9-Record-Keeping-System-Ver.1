import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

export default function ModalProfitService(props) {

    const {service,toggle, modalProfServ, getProfServ,serviceName,setServiceName} = props;

    return (
        <div>
            <Modal isOpen={modalProfServ} toggle={toggle}>
                <ModalHeader toggle={toggle}>Please choose...</ModalHeader>
                <ModalBody>

                    <div className="col-md-12">
                        <label className="form-label">Service Name:</label>
                        <select value={serviceName} onChange={(e) => setServiceName(e.target.value)} id="servName" className="form-select">
                            <option selected>Select...</option>
                            {service.map(el => <option>{el.serviceName}</option>)}
                        </select>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => getProfServ(serviceName, setServiceName)}>Ok</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}