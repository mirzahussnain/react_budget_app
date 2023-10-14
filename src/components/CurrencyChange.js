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
        
        <div className="d-flex flex-row">
            <label className="p-2" style={{fontWeight:'bolder'}} for="Currency">Currency:</label>
            <select className="form-select text-white p-2 font-weight-bolder " style={{ fontWeight:'bolder',marginLeft: '0.1rem',backgroundColor:'rgb(125,255,153)',height:'70%',width:'70%' }}
            onChange={(event)=>changeCurrency(event.target.value)}
            >
               <option className="text-black" defaultValue="">Select Currency..</option>
               <option className="text-black" value="$">$ Dollar</option>
               <option className="text-black" value="£">£ Pound</option>
               <option className="text-black" value="€">€ Euro</option>
               <option className="text-black" value="₹">₹ Rupee</option>
            </select>
        </div>
    );
}

export default CurrencyChange;