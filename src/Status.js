import React, {useState} from 'react'
import ModalProfitService from "./ModalProfitService";
import TableProfitService from "./TableProfitService";
import TableProfitAllServicies from "./TableProfitAllServicies";
import TableDebtAllServicies from "./TableDebtAllServicies";

export default function Status(props) {

    const {service, order} = props;

    // ***************** Profit calculation for ONE Service *****************

    const [result, setResult] = useState([])                       //rendering result for One Service in Table
    const [show, setShow] = useState(false);                        //Show/Hide table option

    const [serviceName, setServiceName] = useState('');           //Modal window - input;
    const [modalProfServ, setModalProfServ] = useState(false);    //Modal window "Choose Service"
    const toggle = () => setModalProfServ(!modalProfServ);                 //toggle for Modal window

    function getProfServ(serviceName, setServiceName) {
        setProfitOn(false); setDebtOn(false);
        let oneServiceProfit = service.find(item => item.serviceName === serviceName).profit;
        let numberOfOrderedService = order.filter(el => el.nameOfService === serviceName).length;
        let profitService = oneServiceProfit * numberOfOrderedService;
        setResult([serviceName, numberOfOrderedService, profitService]);          //our result for one service
        setShow(true);
        setServiceName('');                                                            //Modal input - clear;
        setModalProfServ(false);                                                 //Modal window - close;
    }

    // ***************** Profit calculation for ALL Service *****************

    const [total, setTotal] = useState([]);                  //Final profit calculation for all services in Table
    const [profitOn, setProfitOn] = useState(false)           //For transfering data to Table - rendering
    const [sum, setSum] = useState(0);                       //Total profit calculation/changes in Table below

    function calcProfit() {
            setShow(false); setDebtOn(false);
            setTotal([]); setProfitOn(false);
            let targetName = service.map(el => el.serviceName);             //got array of names
            let num = targetName.map(el => order.filter(item => item.nameOfService === el).length);   //got array of numbers (how many was ordered)

            let oneProfit = service.map(el => el.profit);                  //got array of profits (profit per one service)
            let totalServProfit = [];
            for (let i = 0; i < num.length; i++) {
                totalServProfit.push(num[i] * oneProfit[i]);               //got array of profits for each service, dep.of how many it was ordered
            }
            let totalSum = totalServProfit.reduce((acc, curr) => acc + curr, 0)

            let newArr = [];
            for (let i = 0; i < targetName.length; i++) {                   //got array of Info per service: name, number, total profit
                newArr.push({nameOfProf: targetName[i], numOfProf: num[i], totOfProf: totalServProfit[i]});
            }
            setTotal(newArr);
            setSum(totalSum);
            setProfitOn(!profitOn)
    }

    // ********************************* DEBT for ALL ***************************************

    const [debtOverview, setDebtOverview] = useState([])
    const [debSum, setDebSum] = useState(0)
    const [debtOn, setDebtOn] = useState(false);

    function calcDebt(){
        setShow(false); setProfitOn(false);
        let newList = order.filter(el => el.debt !== 0);
        let newSum = order.map(el => el.debt).reduce((acc, curr) => acc + curr, 0);
        setDebtOverview(newList);
        setDebSum(newSum)
        setDebtOn(!debtOn)
    }

    // **************************************************************************

    function clear(){
        setTotal([])                        //'Calculation for ALL Service' - Clear
        setResult([])                        //'Calculation for ONE Service' - Clear
        setShow(false)
        setProfitOn(false)
        setDebtOverview([]);
        setDebSum(0)
        setDebtOn(false)
        setSum(0)
    }

    return (
        <div>
            <div className="container px-0">
                <div className="row gx-2 mb-4">
                    <div className="col">
                        <div className="p-0.5 border bg-light">
                            <span className="inline">

                                <button onClick={calcProfit} type="button" className="btn btn-outline-primary m-4 d-inline-block"> Profit </button>
                                <button onClick={calcDebt} type="button" className="btn btn-outline-danger m-4 d-inline-block"> Debt </button>
                                <button onClick={toggle} type="button" className="btn btn-outline-primary m-4 d-inline-block"> One Service Profit</button>
                                <button onClick={clear} type="button" className="btn btn-outline-primary m-4 d-inline-block"> Clear </button>
                                {/*<button type="button" className="btn btn-primary m-4"> Remove Filter </button>*/}
                                <h6 className="d-inline-block start-100 text-primary">Profit / Debt: {sum - debSum}</h6>
                            </span>

                        </div>
                    </div>
                </div>
            </div>

             {/* *********** Profit calculation for ONE service ********************/}

            <ModalProfitService service={service} toggle={toggle} modalProfServ={modalProfServ}
                                serviceName={serviceName} setServiceName={setServiceName} getProfServ={getProfServ}/>
            {show && <TableProfitService result={result}/>}

            {/* ******************* For ALL ********************* */}

            {profitOn && <TableProfitAllServicies total={total} sum={sum}/>}

            {debtOn && <TableDebtAllServicies debtOverview={debtOverview} debSum={debSum}/>}

        </div>
    )
}