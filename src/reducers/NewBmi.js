import { SET_DATA } from "../actions";

const initialState = {
   data: { }
}
   export default function setdata (state = initialState, action) {
    
     switch (action.type) {
       case SET_DATA:
         return {
           ...state,
           data: action.payload,
         };
         default:
       return state;
   }
 }