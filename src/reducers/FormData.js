import { USER_NAME } from "../actions";

const initialState = {
   name:"",
}
   export default function formdata (state = initialState, action) {
    
     switch (action.type) {
       case USER_NAME:
         return {
           ...state,
           name: action.payload,
         };
         default:
       return state;
   }
 }