import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import AddMoney from "./addMoney";
import Challenges from "./challenges";
import ModuleDisplay from "./modules/moduleDisplay";
//INPUT - USEREMAIL

export default function User(props) {
   
    const [data, setData] = useState([]);
    
    

    useEffect(() => {
        const q = query(collection(db, 'userinfo'), where("useremail", "==", props.useremail));
        const un = onSnapshot(q, snapshot => {
            setData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        return un;
    },[])
    
    return(
        <div>
            {data && data.map(user => (
                <div key={user.id}> 
                    <p>NAME: {user.username}</p>
                    <p>{user.useremail}</p>
                    
                    
                    <img src={user.userimage} alt="" ></img>
                    <h1>CASH: {user.cash}</h1>
                    <h1>ADD MONEY</h1>
                    <AddMoney id={user.id} cash={user.cash} />
                    <h1>CHALLENGES</h1>
                    <Challenges id={user.id} on={user.challenges}/>
                    <ModuleDisplay id={user.id}/>
                </div>
            ))}
        </div>
    )
}