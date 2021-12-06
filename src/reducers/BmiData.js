import { STORE_BMI } from "../actions";
import { getData } from "../helpers/localStorage";

const initialState = {
   storeBmi: getData('data') || [],
}
   export default function bmiData (state = initialState, action) {
    
     switch (action.type) {
       case STORE_BMI:
         return {
           ...state,
           storeBmi: action.payload,
         };
         default:
       return state;
   }
 }