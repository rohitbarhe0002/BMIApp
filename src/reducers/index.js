 
import { combineReducers } from 'redux';
import setdata from './NewBmi';
import setuser from './userData';
import bmiData from './BmiData';
import formdata from './FormData';

export default combineReducers({
    setuser,
   setdata,
   bmiData,
   formdata,
});