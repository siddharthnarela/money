import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react"

// IMPORTS FROM USER/ HOME/ - CASH OF USER

export default function AddMoney(props) {
    //CASH TO BE ADDED
    const [cash , setCash] = useState(0);
    //ALREADY HAVING CASH IN ACCOUNT
    const userCash = props.cash;

    
    //THIS UPDATES THE DB ON FORM SUBMIT
    const UpdateDatabase = async (e) => {
        e.preventDefault();
        // FindDatabase()
        if(Number(cash) > 0)
        {
            let ResCash = Number(userCash) + Number(cash);
            await updateDoc(doc(db, 'userinfo', props.id), {
                //THINGS TO UPDATE
                cash: ResCash
            })
            .then(msg => {
                console.log("SUCCESSFULL") 
                setCash(0)
            })
            .catch(err => {
                console.log("ERror")
            })
        }
    }

    return (
        <div>
            <form onSubmit={UpdateDatabase}>
                <input type="number" placeholder="Cash" 
                onChange={e => {setCash(e.target.value)}} 
                value={cash} max={10000} required/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}