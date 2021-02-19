import React, {useState} from 'react';
import NewOrderInput from "./NewOrderInput";
import {v4 as uuidv4} from "uuid";
import SearchOrder from "./SearchOrder";
import ModalEditOrder from "./ModalEditOrder";

export default function Order(props){

    const {client, service, order, setOrder} = props;

    const header = ['','Date & Time', 'Client','Service','Price','Pre-payment', 'Debt','Status', ''];
    const statuses = ['Underway', 'Postponed', 'Cancelled', 'Done'];

    // *************************************** ADD *****************************************

    const [modal, setModal] = useState(false);                // 'NewOrderInput' window
    const toggle = () => setModal(!modal);

    function addOrder(dateCreated, setDateCreated, clientName, setClientName,serviceItem, setServiceItem,
                      clientPrice, setClientPrice,prepayment, setPrepayment,debt, setDebt,currentStatus, setCurrentStatus){
        let newList = [];
        if (order.length === 0) {newList = [
            {id: uuidv4(), date:dateCreated, nameOfClient:clientName, nameOfService:serviceItem,
                price:clientPrice, paid:prepayment, debt:debt, status: currentStatus}
        ]} else {
            newList = [...order, {id: uuidv4(), date:dateCreated,nameOfClient:clientName, nameOfService:serviceItem,
                price:clientPrice, paid:prepayment, debt:debt, status: currentStatus}];
        }
        setOrder(newList)
        setDateCreated(new Date().getTime())
        setClientName(client)
        setServiceItem(service)
        setClientPrice(0)
        setPrepayment(null)
        setDebt(0)
        setCurrentStatus('')
        setModal(false)
    }

    // *********************************** DETETE *********************************************

    function deleteOrder(id) {
        const newList = order.filter(el => el.id !== id);
        setOrder(newList);
    }

    // ************************************ SEARCH *********************************************

    const [userInputName,setUserInputName] = useState('')                  //input from user
    const [toggleSearch, setToggleSearch] = useState(false);               //toggle for Search
    const [makeItVisible, setMakeItVisible] = useState(false)              //toggle for "Not found"-message

    function search(userInputName) {
        if (userInputName === '') return null;
        let copyOrder = order.slice();
        copyOrder.map(el => {
            if (el.nameOfClient.toLowerCase() === userInputName.toLowerCase()){
                let newArr = copyOrder.filter(el => el.nameOfClient.toLowerCase() === userInputName.toLowerCase());
                setOrder(newArr);
                setToggleSearch(!toggleSearch);
            } else if (el.nameOfService.toLowerCase() === userInputName.toLowerCase()){
                let newArr = copyOrder.filter(el => el.nameOfService.toLowerCase() === userInputName.toLowerCase());
                setOrder(newArr);
                setToggleSearch(!toggleSearch);
            } else if (el.status.toLowerCase() === userInputName.toLowerCase()){
                let newArr = copyOrder.filter(el => el.status.toLowerCase() === userInputName.toLowerCase());
                setOrder(newArr);
                setToggleSearch(!toggleSearch);
            } else {
                setMakeItVisible(!makeItVisible);
            }
        })
        setUserInputName('')
    }

    // ********************************* EDIT ********************************

    function editOrder(id, date,nameOfClient,nameOfService,price,paid,debt,status) {
        const newList = order.map(el => {
            if (el.id === id) return {...el, date,nameOfClient,nameOfService,price,paid,debt,status};
            return el;
        })
        setOrder(newList);
    }

    // ********************************* CLEAR ********************************

    function clearOrder(){
        setUserInputName('')                      // input
        setMakeItVisible(false);                  // to hide message "Not found"
        let newArr = [...order];
        setOrder(newArr);
        setToggleSearch(false);
    }

    return(
            <div className="container px-0">
                <div className="border bg-light mb-4 position-relative">   {/* grey color, foundation */}


                    <div className="row">
                        <div className="col-sm">
                            <button onClick={toggle} type="button" className="btn btn-primary m-4"> Create Order </button>
                        </div>

                        <div className="col-8">
                            <input value={userInputName} onChange={(e) => setUserInputName(e.target.value)}
                                   className="rounded-3 lh-lg border-white m-4 end-0"/>

                            <button onClick={() => search(userInputName)} type="button" className="btn btn-primary m-4 start-0"> Search </button>

                            {makeItVisible && <h6 className="d-inline text-danger"> Not found! </h6>}
                        </div>

                        <div className="col-sm">
                            <button onClick={clearOrder} type="button" className="btn btn-primary m-4 start-100"> Clear </button>
                        </div>
                    </div>

                </div>

            <NewOrderInput toggle={toggle} modal={modal} addOrder={addOrder} client={client} service={service} statuses={statuses}/>

            {toggleSearch &&
            <SearchOrder order={order} header={header}/>}

            {!toggleSearch &&
            <table className="table table-hover table-light border bg-light">
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
                        <ModalEditOrder editOrder={editOrder} oneOrder={el}/>
                        <button onClick={() => deleteOrder(el.id)} type="button" className="btn btn-outline-danger"> Delete </button>
                    </tr>
                )}
                </tbody>
            </table>
                }
        </div>
    )
}



