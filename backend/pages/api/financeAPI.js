import { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, doc, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';
import Invest from './invest';

//IMPORTS FROM USER- EMAIL ID UNITS AND CASH OF USER
function FinanceModule({id, cash, email, userunits}) {

  // const URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=SCSXNSM6O032NP18.";
  const HDFCSYMBOL = "0P0001BA79.BO"

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);

  const [userprice, setUserprice] = useState(0);
  const [units, setUnits] = useState(0);

  const [data, setData] = useState([]);

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

  const deductCashFromUserDatabase = async () => {
    await updateDoc(doc(db, 'userinfo', id), {
        cash: cash-userprice
    })
  }

  const addDataInPortfolioDatabase = async () => {

    // const data = [];

    // const q = query(collection(db, 'userinfo'), where("useremail", "==", email));
    //     const un = onSnapshot(q, snapshot => {
    //         data.push(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    // })

    // console.log(data['useremail']);

    await updateDoc(doc(db, 'userinfo', id), {
        company : HDFCSYMBOL,
        purchasePrice :  price,
        units:  userprice/price
    })
    .then(user => {console.log("ADDED")})
    .catch(err => {console.log("ERROR")})
}

const checkIfAlreadyInvested = () => {
    if(userunits > 0)
    {
        console.log("ALREADY INVESTED.")
    }
    else 
    {
        invest();
    }

}

  const invest = () => {
    if(userprice < cash && userprice != 0)
    {
        let units = userprice/price;
        setUnits(units);
        deductCashFromUserDatabase();       
        setUserprice(0); 
        addDataInPortfolioDatabase();
        console.log("PURCHASED")
    }
    else {
        console.log("NOT PURCHASED")
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
          <input type='number' placeholder='Enter number' 
          onChange={e => {setUserprice(e.target.value)}}
          value={userprice} />
          <button onClick={() => {
                checkIfAlreadyInvested();
            }}>Invest</button>
          
          <Invest id={id}/>
          <p>Units: {units}</p>
        </div>
      }

    </div>
  );
}

export default FinanceModule;
