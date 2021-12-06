import { SET_USER } from "../actions";

const initialState = {
    user:{
       weight :"",
        height:"",
        date :"",
      
    },
   }
   
   export default function setuser (state = initialState, action) {
    
     switch (action.type) {
       case SET_USER:
         return {
           ...state,
           user: action.payload,
         };
         default:
       return state;
   }
 }