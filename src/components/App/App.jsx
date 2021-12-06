import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import BmiForm from '../BmiForm/BmiForm';
import Info from '../Info/Info';
import Bar from '../Bar/Bar';
import { useSelector,useDispatch} from 'react-redux';
import { setdata } from '../../actions';
import {  getData, storeData } from '../../helpers/localStorage';
import { storebmi } from '../../actions';
import { useHistory } from 'react-router';

const App = () => {
  const dispatch = useDispatch();
let history = useHistory();
  
  const bmiData = useSelector((state) => state.bmiData.storeBmi);
  // const [state, setState] = useState(initialState);
  // const [data, setData] = useState({});
  const data = useSelector((state) => state.setdata.data);

  useEffect(() => {
    storeData('data', bmiData);
    const date = bmiData.map(obj => obj.date);
    const bmi = bmiData.map(obj => obj.bmi);
    let newData = { date, bmi};
    dispatch(setdata(newData))
  }, [bmiData]);

  const handleChange = val => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv4();
    let newVal = [...bmiData, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    dispatch(storebmi(newVal));
    console.log(newVal);
  };

  const handleDelete = id => {
    storeData('lastState', bmiData);
    let newState = bmiData.filter(i => {
      return i.id !== id;
    });
    dispatch(storebmi(newState));
  };

 const handleUndo = () => {
    dispatch(storebmi(getData('lastState')));
  };

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <BmiForm change={handleChange} />
          <Bar labelData={data.date} bmiData={data.bmi} />
          <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>
              {bmiData.length > 0 ? (
                <>
                  {bmiData.map(info => (
                    <Info
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                  <div className='center white-text'>No log found</div>
                )}
            </div>
          </div>
          {getData('lastState') !== null ? (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          ) : ( '' )
          }
        </div>
      </div>
    </div>
  );
};

export default App;
