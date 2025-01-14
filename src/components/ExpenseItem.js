import {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus,faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem=(props)=>{
const {dispatch,currency}=useContext(AppContext);

const handleDeleteExpense=()=>{
    dispatch({
        type:"DELETE_EXPENSE",
        payload:props.id,
    });
};

const increaseAllocation=(name)=>{
    const expense={
        name:name,
        cost:10,
    };

    dispatch({
        type:"ADD_EXPENSE",
        payload:expense,
    });
}

const decreaseAllocation=(name)=>{
    const expense={
        name:name,
        cost:10,
    }
    dispatch({
        type:"DECREASE_EXPENSE",
        payload:expense,
    });
}

return(
    <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button onClick={event=>increaseAllocation(props.name)} style={{ border: 'none',backgroundColor:'transparent'}}>
                <FontAwesomeIcon icon={faCirclePlus} size='2xl' style={{color: "#28804a",}}/>
            </button>
        </td> 
        <td>
            <button onClick={event=>decreaseAllocation(props.name)} style={{ border: 'none',backgroundColor:'transparent'}}>
                <FontAwesomeIcon icon={faCircleMinus} size="2xl" style={{color: "#c31818",}}/>
            </button>
            </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}/></td>
    </tr>
);
}

export default ExpenseItem;
