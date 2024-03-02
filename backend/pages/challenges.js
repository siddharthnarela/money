// import { useState } from "react";
import {challenges} from "../data/challenges";
import { db } from "../config/firebase"; 
import { updateDoc, doc } from "firebase/firestore";

//IMPORTS FROM USER - ID, ON -> THAT DEFINES LAST DONE CHALLENGE
//CHALLENGES THEMSELVES ARE STORES IN data/challenges.js

export default function Challenges({id, on}) {

    //JUST ADDS 1 TO CURRENT CHALLENGES AND UPDATE IT
    const UpdateChallengesInDatabase = async () => {
        await updateDoc(doc(db, "userinfo", id), {
            challenges: on+1
        })
    }

    return (
        <div>
            {
                challenges.map((challenge, index) => (
                    <div style={index === on ? {display:'block'} : {display:"none"}}>
                        <label >Challenge {index+1}: {challenge}</label>
                        <input type="checkbox" onClick={UpdateChallengesInDatabase}/>
                    </div>
                ))
                
            }
            <p style={on === challenges.length ? {display:'block'} : {display:'none'}}>COMPLETED</p>
        </div>
    )
}