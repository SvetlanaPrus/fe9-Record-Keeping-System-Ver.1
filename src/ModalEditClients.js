import React, {useState} from 'react';
import {ModalHeader,ModalBody,ModalFooter,Button,Modal} from "reactstrap";

export default function ModalEditClients(props){

    const {editClient, oneClient} = props;

    const [modalEdit, setModalEdit] = useState(false);        //modal window for 'Edit'
    const toggleEdit = () => setModalEdit(!modalEdit);

    const [editCompName, setEditCompName] = useState(oneClient.company);
    const [editFirstName, setEditFirstName] = useState(oneClient.firstName);
    const [editSurname, setEditSurname] = useState(oneClient.surname);
    const [editPhone, setEditPhone] = useState(oneClient.phone);
    const [editEmail, setEditEmail] = useState(oneClient.email);
    const [editAddress, setEditAddress] = useState(oneClient.address);

    function saveButtonHandler(id, editCompName,editFirstName,editSurname,editPhone,editEmail,editAddress){
        toggleEdit();
        editClient(id, editCompName,editFirstName,editSurname,editPhone,editEmail,editAddress);
    }

    return (
        <>
            <button onClick={toggleEdit} type="button" className="btn btn-outline-primary me-4 mt-1 mb-1"> Edit </button>
            <Modal isOpen={modalEdit} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}> What do you want to change? </ModalHeader>
                <ModalBody>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label"> <h6> Company Name: </h6> </label>
                            <input value={editCompName} onChange={(e) => setEditCompName(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="serName"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> First Name: </h6> </label>
                            <input value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="clPrice"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Surname: </h6> </label>
                            <input value={editSurname} onChange={(e) => setEditSurname(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="cstPrice"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Phone Number: </h6> </label>
                            <input value={editPhone} onChange={(e) => setEditPhone(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prvPrice"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> E-mail address: </h6>  </label>
                            <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prof"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Address: </h6>  </label>
                            <input value={editAddress} onChange={(e) => setEditAddress(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prof"
                            />
                        </div>
                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => saveButtonHandler(oneClient.id, editCompName,
                        editFirstName,editSurname,editPhone,editEmail,editAddress)}> Save </Button>{' '}

                    <Button color="secondary" onClick={toggleEdit}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}