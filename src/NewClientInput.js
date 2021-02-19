import React, {useState} from 'react';
import {ModalHeader,ModalBody,ModalFooter,Button,Modal} from "reactstrap";


export default function NewClientInput(props){

    const {modal, toggle,addClient} = props;

    const [company, setCompany] = useState('')
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    return (
        //modal window

        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Client</ModalHeader>
                <ModalBody>

                    <form className="row g-3">

                        <div className="col-md-12">
                            <label className="form-label">Company:</label>
                            <input value = {company} onChange={(e) => setCompany(e.target.value)}
                                type="text" className="form-control" id="company"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">First Name:</label>
                            <input value = {firstName} onChange={(e) => setFirstName(e.target.value)}
                                type="text" className="form-control" id="firstName"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Surname:</label>
                            <input value = {surname} onChange={(e) => setSurname(e.target.value)}
                                type="text" className="form-control" id="surname"/>
                        </div>

                        <div className="col-md-5">
                            <label className="form-label">Phone:</label>
                            <input value = {phone} onChange={(e) => setPhone(e.target.value)}
                                type="number" className="form-control" id="phone"/>
                        </div>
                        <div className="col-md-7">
                            <label className="form-label">Email:</label>
                            <input value = {email} onChange={(e) => setEmail(e.target.value)}
                                type="text" className="form-control" id="email"/>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Address:</label>
                            <input value = {address} onChange={(e) => setAddress(e.target.value)}
                                type="text" className="form-control" id="address"/>
                        </div>

                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                            onClick={() => addClient(company,firstName,surname,phone,email,address,setCompany,setFirstName,setSurname,setPhone,setEmail,setAddress)}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}