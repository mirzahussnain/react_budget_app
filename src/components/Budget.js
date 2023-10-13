import {useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget=()=>{
    const {budget,expenses,currency}=useContext(AppContext);
    const [newBudget,setNewBudget]=useState(budget);

    const handleBudgetChange=(event)=>{
        const totalExpense=expenses.reduce((total,item)=>(total+=item.cost),0);
        const changedBudget=event.target.value;
        const remainingBudget=budget-totalExpense;
        setNewBudget(changedBudget);
            if(changedBudget<totalExpense)
            {
                alert("You cannot reduce budget value lower than expenses");
                setNewBudget(budget);
            }
            else if(changedBudget>20000)
            {
                alert("The value cannot exceed remaining fund "+currency+remainingBudget);
                setNewBudget(budget);
            }
            
           
       
    
    }

    return(
        <>
        <div className="alert alert-secondary">
            <span>Budget:{`${currency} ${newBudget}`}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{width:'40%'}}/>

        </div>
        </>
    );
}

export default Budget;