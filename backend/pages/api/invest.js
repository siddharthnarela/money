import { db } from '../../config/firebase';
import { useState } from 'react';
import { collection, doc, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';

export default function Invest({id, cash, userunits, company, price}) {

    const [userprice, setUserprice] = useState(0);
    const [units, setUnits] = useState(0);

    const deductCashFromUserDatabase = async () => {
        await updateDoc(doc(db, 'userinfo', id), {
            cash: cash-userprice
        })
      }
    
    const addDataInPortfolioDatabase = async () => {

        await updateDoc(doc(db, 'userinfo', id), {
            company : company,
            purchasePrice :  price,
            units:  userprice/price
        })
        .then(user => {console.log("ADDED")})
        .catch(err => {console.log("ERROR")})
    }

    const checkIfAlreadyInvested = (e) => {
        e.preventDefault();
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
        <div>
            <form onSubmit={checkIfAlreadyInvested}>
            <input type='number' placeholder='Enter number' 
                onChange={e => {setUserprice(e.target.value)}}
                value={userprice} />
            <button type="submit">Invest</button>
            </form>
        </div>
    )
}