import React, {useState} from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter,Button,} from "reactstrap";
// import DayPicker from 'react-day-picker';                                     //https://react-day-picker.js.org/
// import 'react-day-picker/lib/style.css';
// import DatePicker from 'react-datepicker';
// import Moment from 'react-moment';
// import {Col,Label,Input,FormGroup} from "reactstrap";

export default function NewOrderInput(props) {

    const {toggle, modal, addOrder, statuses, client, service} = props;

    // const [orderDate, setOrderDate] = useState(new Date())

    // const [timeCreated, setTimeCreated] = useState('');
    const [dateCreated, setDateCreated] = useState(new Date().getTime());
    const [clientName, setClientName] = useState(client)
    const [serviceItem, setServiceItem] = useState(service)
    // const [deliveryDate, setDeliveryDate] = useState('')
    const [clientPrice, setClientPrice] = useState(0)
    const [prepayment, setPrepayment] = useState(null)
    const [debt, setDebt] = useState(0)
    const [currentStatus, setCurrentStatus] = useState('')

    function getPrice(serviceItem){
        if (serviceItem === '') {
            setClientPrice(0);
        } else {
            let targetService = service.find(el => el.serviceName === serviceItem);
            let targetPrice = targetService.clientPrice;
            setClientPrice(targetPrice);
        }
    }

    function getDebt(clientPrice,prepayment){
        let calcDebt = clientPrice - prepayment;
        setDebt(calcDebt);
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Order:</ModalHeader>
                <ModalBody>
                    {/*popitka ispolzovat etot metod - 1*/}
                    {/*<Moment format="DD/MM/YYYY" date={new Date()}/>*/}

                    {/*popitka ispolzovat etot metod - 3; poka ostavila*/}
                    {/*<h6 className="container primary">It is {new Date().toLocaleTimeString()}</h6>*/}

                    {/*popitka ispolzovat etot metod - 2*/}
                    {/*<DatePicker todayButton="Vandaag" selected={orderDate} onChange={date => setOrderDate(date)}/>*/}

                    <div className="container w-50 mx-lg-0">
                        <span className="input-group-text" id="d/t"><h6>Date / Time:</h6></span>
                        <input value={dateCreated} onChange={(e) => setDateCreated(e.target.value)}
                               type="datetime-local" className="form-control" id="datetime" placeholder=""/>
                    </div>
                    {/*<div>*/}
                    {/*    <span className="input-group-text" id="addon-wrapping">Time:</span>*/}
                    {/*    <input value={timeCreated} onChange={(e) => setTimeCreated(e.target.value)}*/}
                    {/*           type="time" className="form-control" id="time"/>*/}
                    {/*</div>*/}



                <div className="container mt-4">

                        <div className="row g-2">
                            <div className="col-6">
                                <div className="p-3 border bg-light"><h6>Client:</h6>
                                    <select value={clientName} onChange={(e) => setClientName(e.target.value)}
                                            className="form-select" >
                                        <option selected>-- Select --</option>
                                        {client.map(el => <option>{el.firstName} {el.surname}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="p-3 border bg-light"><h6>Service:</h6>
                                    <select value={serviceItem} onChange={(e) => setServiceItem(e.target.value)} className="form-select">
                                        <option id="serviceListOptions" selected>-- Select --</option>
                                        {service.map(el => <option>{el.serviceName}</option>)}
                                    </select>

                                    {/*<DatePicker todayButton="Vandaag" selected={deliveryDate} onChange={date => setDeliveryDate(date)}/>*/}

                                </div>
                            </div>

                            <div className="col-6">
                                <div className="p-3 border bg-light"><h6> Payment: </h6>
                                    <Button color="outline-secondary" type="button" className="mt-2 mb-1 me-lg-3 start-0"
                                            onClick={() => getPrice(serviceItem)}> Get </Button>
                                    <label>Price: {clientPrice}</label>

                                    <div className="w-auto">
                                        <label className="form-label"><h6> Pre-payment: </h6></label>
                                        <input value={prepayment} onChange={(e) => setPrepayment(e.target.value)}
                                               type="number" className="form-control" id="prepayment"/>
                                    </div>
                                    <div className="w-auto">
                                        <Button color="outline-secondary" type="button" className="mt-2 mb-1 me-lg-3 start-0"  //me: rasstojanie mezdu knopkoj i tekstom
                                                onClick={() => getDebt(clientPrice,prepayment)}> Get </Button>
                                        <label className="form-label"> Debt: {debt}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">
                                    <select value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)}
                                            className="form-select" >
                                        <option selected> Status: </option>
                                        {statuses.map(el => <option>{el}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                            onClick={() => addOrder(dateCreated, setDateCreated, clientName, setClientName,serviceItem, setServiceItem,
                                clientPrice, setClientPrice,prepayment, setPrepayment,debt, setDebt,currentStatus, setCurrentStatus)}>
                        Save
                    </Button>{' '}
                    <Button color="outline-secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
