import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencyChange=()=>{
    const {dispatch}=useContext(AppContext);
    

    const changeCurrency=(c)=>{
        dispatch({
            type:'CHG_CURRENCY',
            payload:c,
        })
        
    }
   
    return(
        <select class="form-select text-white" style={{fontWeight:'bolder', marginLeft: '2rem',backgroundColor:'rgb(125,255,153)',height:'70%' }}
        onChange={(event)=>changeCurrency(event.target.value)}
        >
            <option defaultValue>Select Currency...</option>
           <option value="£">£ Pound</option>
           <option value="€">€ Euro</option>
           <option value="₹">₹ Indian Rupee</option>
           <option value="$">$ Dollar</option>
           <option value="Rs.">Rs. Pakistani Rupee</option>
        </select>
    );
}

export default CurrencyChange;