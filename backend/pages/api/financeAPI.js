import { useState } from 'react';

import Invest from './invest';
import Sell from './sell';

//IMPORTS FROM USER- EMAIL ID UNITS AND CASH OF USER
function FinanceModule({id, cash, email, userunits}) {

  // const URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=SCSXNSM6O032NP18.";
  const HDFCSYMBOL = "0P0001BA79.BO"

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);




  let url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=IN&symbols=`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a204f2383bmshab7de3489609840p15e8b7jsna035f2138ebb',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };



  const getDataFromAPI = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json()
      .then(text => {
        setName(text['quoteResponse']['result'][0]['longName']);
        console.log(text['quoteResponse']['result'][0]['marketState']);
        setPrice(text['quoteResponse']['result'][0]['regularMarketPrice']);
      })
      .catch(err => {
        console.log(err)
    });
    } catch (error) {
        console.error(error);
    }
  }

  

  return (
    <div className="App">
      <button onClick={() => {
          url += HDFCSYMBOL;
          getDataFromAPI();
        }}>HDFC</button>
      
      {name && 
        <div>
          <h1>Price: {price}</h1>
          <Invest cash={cash} id={id} userunits={userunits} company={HDFCSYMBOL} price={price}/>
          <Sell userunits={userunits} id={id} purchasePrice={price} company={HDFCSYMBOL}/>
        </div>
      }

    </div>
  );
}

export default FinanceModule;
