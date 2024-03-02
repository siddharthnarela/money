import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";

export default function Sell({id, userunits, purchasePrice, company}) {
    
    const [profit, setProfit] = useState("");

    const findCurrentPrice = async () => {

        let url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=IN&symbols=${company}`;
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'a204f2383bmshab7de3489609840p15e8b7jsna035f2138ebb',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
        };
        try {
          const response = await fetch(url, options);
          const result = await response.json()
          .then(text => {
            return text['quoteResponse']['result'][0]['regularMarketPrice'];
          })
          .catch(err => {
            console.log(err)
            return 0;
        });
        } catch (error) {
            console.error(error);
            return 0;
        }
      }

    const RemoveInvestmentFromDatabase = async () => {
        await updateDoc(doc(db,'userinfo', id), {
            company: "",
            purchasePrice: 0,
            units: 0,
        })
        .then(user => {console.log("DELETED")})
        .catch(err => {console.log("Error")})
    }

    const sell = () => {
        if(userunits > 0)
        {
            //TO SELL
            console.log(company);
            setProfit(findCurrentPrice() - purchasePrice);
            console.log(profit);
            RemoveInvestmentFromDatabase();
        }
        else{
            console.log("Nothing to sell");
        }
    }
    return (
        <div>
            <button onClick={sell}>Sell</button>
            <p>Profit: {profit}</p>
        </div>
    )
}