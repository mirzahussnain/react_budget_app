import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext';


const Remaining=()=>{
    const {budget,expenses,currency}=useContext(AppContext);
    const totalExpense=expenses.reduce((total,item)=>{
        return total+=item.cost;
    },0);
    const alertType=totalExpense>budget? "alert-danger":"alert-success";
    return(
        <>
        <div className={`alert ${alertType}`}>
            <span>Remaining Budget:{currency}{budget-totalExpense}</span>
        </div>
        </>
    );

}

export default Remaining;