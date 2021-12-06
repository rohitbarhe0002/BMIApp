import React from 'react'
import { useHistory } from 'react-router-dom'
import App from '../App/App';
import Routing from './Routing';
import { username } from '../../actions';
import { useSelector,useDispatch} from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default function LoginUser() {

  const dispatch = useDispatch();
  let history = useHistory();
  const username1 = useSelector((state) => state.formdata.name);
  const{name}=username1;

  const inputChange = (e) =>{

    let { value, name } = e.target;
    dispatch(username({...username1, [name]: value}));
  

  }
  const handleSubmit = (e) => {
    console.log(username1);
    e.preventDefault();
    history.push('/App');
  }

  const lastrecord = JSON.parse(localStorage.getItem('data'))
  const final = lastrecord.slice(-5)
  return (
    <div>
      <form onSubmit={handleSubmit}>
      
        <input className="mx-auto" name="name" type="text" value={name} onChange={inputChange} />
        <input type ="submit" value="submit"/>
      </form>
      {final.map((item)=><li>{item.name}</li>)}
    </div>
  )
}
