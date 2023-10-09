import './App.css';
import {GlobalVarsContext} from './GlobalVarsContextProvider'
import React, { useEffect, useState, useContext  } from 'react';

function App() {
  const [ apples,  setApples ] = useState([]);
  const [ oranges, setOranges] = useState([]);
  const [ weather, setWeather] = useState([]);

  const { ORANGES_API_URL , APPLES_API_URL, FORECAST_URL} = useContext(GlobalVarsContext)

  useEffect(() => {
 
      async function getApples() {
          const response = await fetch(`${APPLES_API_URL}/api/apples`, {
              mode: 'cors',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
              }
          });

          setApples(await response.json());
      }
      getApples();


      async function getOranges() {
        const response = await fetch(`${ORANGES_API_URL}/api/oranges`, {
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });

        setOranges(await response.json());
    }
    getOranges();


    async function getWheather() {
        const response = await fetch(`${FORECAST_URL}`, {
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });

        setWeather(await response.json());
    }
    getWheather();



  }, [ORANGES_API_URL, APPLES_API_URL,FORECAST_URL]);

  return (
    <div className="App">
       
       <h3> apples</h3>
       <ul>
            {apples.map((item) => (
               <li >{item.kind}</li>))}
        </ul>

       <h3> oranges</h3>
       <ul>
            {oranges.map((item) => (
               <li >{item.kind}</li>))}
        </ul>

        < h3> Wheather </h3>
        <div>{weather}</div>
        

    </div>
  );
}

export default App;