import React, {useState} from 'react';
import './mystyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/tab';                 //objazatelno ukazat kakoj element berem, inache daet oshibku
import Service from "./Service";
import Clients from "./Clients";
import Order from "./Order";
import Status from "./Status";
import {v4 as uuidv4} from "uuid";

//Comment: 09.02.2021 -
//Status: Buttons work, but all design must be review/redone.
//Order: Create - status can be used checkbox
//Order: Search - note should be appeared only in one case
//Order: Clear - NOT WORKING!!!
//Services: Edit/Create  - Profit must be calculated auto
//Clients: Create/Edit - phone should accept +

function NavBar() {
    // **************** Component for creating our panel & navigation ***************

    const [client, setClient] = useState([
        {id: uuidv4(), company:'Large', firstName:'Svetlana', surname:'Prus', phone:'+4712345678', email:'svetlana@gmail.com', address:'Morozova 47-2, 0276 Tver'},
        {id: uuidv4(), company:'Medium', firstName:'Igor', surname:'Semenov', phone:'+4723456789', email:'igor@gmail.com', address:'Pl.Pobedi 20-115, 1234 Krasnodar'},
        {id: uuidv4(), company:'Small', firstName:'Vitalij', surname:'Ivanov', phone:'+4734567891', email:'vitalij@gmail.com', address:'Popova 5-65, 0925 Oslo'},
        {id: uuidv4(), company:'Large', firstName:'Jurij', surname:'Petrov', phone:'+4745678912', email:'jurij@gmail.com', address:'Debreceno 54-132, 1235 Klaipeda'},
        {id: uuidv4(), company:'Medium', firstName:'Marina', surname:'Kulikova', phone:'+4785129645', email:'marina@gmail.com', address:'Derzavina 5-25, 2356 Moscow'},
        {id: uuidv4(), company:'Small', firstName:'Jurij', surname:'Zinkevich', phone:'+4712895647', email:'jurijz@gmail.com', address:'Shevchenko 10-41, 5896 Kiev'},
        {id: uuidv4(), company:'Medium', firstName:'Oleg', surname:'Tarasov', phone:'+4756128941', email:'oleg@gmail.com', address:'Gedmenu 6-26, 1258 Kaunas'},
        {id: uuidv4(), company:'Large', firstName:'Grigorij', surname:'Osipov', phone:'+4785462974', email:'grigorij@gmail.com', address:'Torgovaja pl. 12-26, 8541 Bergen'}
    ]);

    const [order, setOrder] = useState([
        {id: uuidv4(), date:'2021-02-04T15:00', nameOfClient:'Svetlana Prus', nameOfService:'Accounting services from A to Z', price:1200, paid:500, debt:700, status: 'Underway'},
        {id: uuidv4(), date:'2021-02-04T15:00', nameOfClient:'Marina Kulikova', nameOfService:'Tax advisory services', price:1500, paid:500, debt:1000, status: 'Postponed'},
        {id: uuidv4(), date:'2021-02-04T15:00', nameOfClient:'Oleg Tarasov', nameOfService:'Annual accounts', price:2500, paid:1000, debt:1500, status: 'Underway'},
        {id: uuidv4(), date:'2021-02-04T15:00', nameOfClient:'Vitalij Ivanov', nameOfService:'Accounting services from A to Z', price:1200, paid:1000, debt:200, status: 'Done'}
    ]);

    const [service, setService] = useState([
        {id: uuidv4(), serviceName: 'Accounting services from A to Z', clientPrice: 1200, costPrice: 900, providerPrice: 700, profit:300},
        {id: uuidv4(), serviceName: 'Company registration', clientPrice: 2000, costPrice: 1200, providerPrice:1000,profit:800},
        {id: uuidv4(), serviceName: 'Tax advisory services', clientPrice: 1500, costPrice: 1100, providerPrice:900,profit:400},
        {id: uuidv4(), serviceName: 'Budgeting', clientPrice: 1200, costPrice: 900, providerPrice:800,profit:300},
        {id: uuidv4(), serviceName: 'Invoicing, reminders and debt collection', clientPrice: 1000, costPrice: 800, providerPrice:700,profit:200},
        {id: uuidv4(), serviceName: 'Corporate income tax return', clientPrice: 2000, costPrice: 1200, providerPrice:1000,profit:800},
        {id: uuidv4(), serviceName: 'Annual accounts', clientPrice: 2500, costPrice: 1200, providerPrice:1000,profit:1300}
    ])

    return (
        <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-status" role="tab"
                       aria-controls="nav-home" aria-selected="true">Status</a>

                    <a className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-orders" role="tab"
                       aria-controls="nav-contact" aria-selected="false">Orders</a>

                    <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-clients" role="tab"
                       aria-controls="nav-profile" aria-selected="false">Clients</a>

                    <a className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-services" role="tab"
                       aria-controls="nav-contact" aria-selected="false">Services</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active" id="nav-status" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Status service={service} order={order}/>
                </div>

                <div className="tab-pane fade" id="nav-orders" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Order client={client} service={service} order={order} setOrder={setOrder}/>
                </div>

                <div className="tab-pane fade" id="nav-clients" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <Clients client={client} setClient={setClient}/>
                </div>
                <div className="tab-pane fade" id="nav-services" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Service service={service} setService={setService}/>
                </div>

            </div>
        </div>
    );
}

export default NavBar;


