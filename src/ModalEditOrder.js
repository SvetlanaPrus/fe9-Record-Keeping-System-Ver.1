import React, {useState} from 'react';
import {ModalHeader,ModalBody,ModalFooter,Button,Modal} from "reactstrap";

export default function ModalEditOrder(props){
    const {oneOrder, editOrder} = props;

    const [modalEdit, setModalEdit] = useState(false);        //modal window for 'Edit'
    const toggleEdit = () => setModalEdit(!modalEdit);

    const [editDate, setEditDate] = useState(oneOrder.date)
    const [editNameClient, setEditNameClient] = useState(oneOrder.nameOfClient)
    const [editNameService, setEditNameService] = useState(oneOrder.nameOfService)
    const [editPrice, setEditPrice] = useState(oneOrder.price)
    const [editPaid, setEditPaid] = useState(oneOrder.paid)
    const [editDebt, setEditDebt] = useState(oneOrder.debt)
    const [editStatus, setEditStatus] = useState(oneOrder.status)

    function saveButtonHandler(id,editDate,editNameClient,editNameService,editPrice,editPaid,editDebt,editStatus){
        toggleEdit();
        editOrder(id, editDate,editNameClient,editNameService,editPrice,editPaid,editDebt,editStatus);
    }

    return (
        <>
            <button onClick={toggleEdit} type="button" className="btn btn-outline-primary me-4 mt-1 mb-1"> Edit </button>
            <Modal isOpen={modalEdit} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}> What do you want to change? </ModalHeader>
                <ModalBody>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label"> <h6> Date: </h6> </label>
                            <input value={editDate} onChange={(e) => setEditDate(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="serName"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Clients Name: </h6> </label>
                            <input value={editNameClient} onChange={(e) => setEditNameClient(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="clPrice"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Service Name: </h6> </label>
                            <input value={editNameService} onChange={(e) => setEditNameService(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="cstPrice"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Price: </h6> </label>
                            <input value={editPrice} onChange={(e) => setEditPrice(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prvPrice"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Paid: </h6>  </label>
                            <input value={editPaid} onChange={(e) => setEditPaid(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prof"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Debt: </h6>  </label>
                            <input value={editDebt} onChange={(e) => setEditDebt(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prof"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"><h6> Status: </h6>  </label>
                            <input value={editStatus} onChange={(e) => setEditStatus(e.target.value)}
                                   type="text"
                                   className="form-control"
                                   id="prof"
                            />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => saveButtonHandler(oneOrder.id, editDate,editNameClient,
                        editNameService,editPrice,editPaid,editDebt,editStatus)}> Save </Button>{' '}

                    <Button color="secondary" onClick={toggleEdit}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}