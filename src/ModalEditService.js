import React, {useState} from 'react';
import {ModalHeader,ModalBody,ModalFooter,Button,Modal} from "reactstrap";

export default function ModalEditService(props){
    const {oneService, editService} = props;

    const [modalEdit, setModalEdit] = useState(false);        //modal window for 'Edit'
    const toggleEdit = () => setModalEdit(!modalEdit);

    const [editServiceName, setEditServiceName] = useState(oneService.serviceName)
    const [editClientPrice, setEditClientPrice] = useState(oneService.clientPrice)
    const [editCostPrice, setEditCostPrice] = useState(oneService.costPrice)
    const [editProvPrice, setEditProvPrice] = useState(oneService.providerPrice)
    const [editProfit, setEditProfit] = useState(oneService.profit)

    function saveButtonHandler(id, editServiceName,editClientPrice,editCostPrice,editProvPrice,editProfit){
        toggleEdit();
        editService(id, editServiceName,editClientPrice,editCostPrice,editProvPrice,editProfit);
    }

    return (
        <>
        <button onClick={toggleEdit} type="button" className="btn btn-outline-primary me-4 mt-1 mb-1"> Edit </button>
        <Modal isOpen={modalEdit} toggle={toggleEdit}>
            <ModalHeader toggle={toggleEdit}> What do you want to change? </ModalHeader>
            <ModalBody>
                <form className="row g-3">
                <div className="col-md-12">
                    <label className="form-label"> <h6> Service Name: </h6> </label>
                    <input value={editServiceName} onChange={(e) => setEditServiceName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="serName"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label"><h6> Client Price: </h6> </label>
                    <input value={editClientPrice} onChange={(e) => setEditClientPrice(e.target.value)}
                        type="text"
                        className="form-control"
                        id="clPrice"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label"><h6> Cost Price: </h6> </label>
                    <input value={editCostPrice} onChange={(e) => setEditCostPrice(e.target.value)}
                        type="text"
                        className="form-control"
                        id="cstPrice"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label"><h6> Provider Price: </h6> </label>
                    <input value={editProvPrice} onChange={(e) => setEditProvPrice(e.target.value)}
                        type="text"
                        className="form-control"
                        id="prvPrice"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label"><h6> Profit: </h6>  </label>
                    <input value={editProfit} onChange={(e) => setEditProfit(e.target.value)}
                        type="text"
                        className="form-control"
                        id="prof"
                    />
                </div>
                </form>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => saveButtonHandler(oneService.id, editServiceName,editClientPrice,
                    editCostPrice, editProvPrice,editProfit)}> Save </Button>{' '}

                <Button color="secondary" onClick={toggleEdit}> Cancel </Button>
            </ModalFooter>
        </Modal>
            </>
    )
}