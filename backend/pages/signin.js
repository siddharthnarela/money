import { useState } from "react";
import { db, auth } from "../config/firebase";
import { GoogleAuthProvider ,signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, onSnapshot, query, where} from 'firebase/firestore';
import User from "./User";

//INDEPENDENT FUNCTION

export default function Signin() 
{
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userimage, setUserimage] = useState("");

    const googleProvider = new GoogleAuthProvider();

    const AddUserInDatabase = async () => {
        
        if(username !== "" && useremail !== "" && userimage !== "")
        {
            await addDoc(collection(db, 'userinfo'), {
                username: username,
                useremail: useremail,
                userimage: userimage,
                cash: 0,
                points: 0,
                challenges: 0,
                module1: 0,
                module2: 0,
                module3: 0,
            })
            .then(user => {
                console.log("CREATED")
                setUsername("");
                setUseremail("");
                setUserimage("");
            })
            .catch(err => {console.log(err)})
        }
    }

    const QueryDatabase = () => {
        try {
            const q = query(collection(db, 'userinfo'), where("useremail", "==", useremail));
            const un = onSnapshot(q , snapshot => {
                if(snapshot.empty) {
                    console.log("not found");
                    AddUserInDatabase();
                } else {
                    console.log("Found")
                }
            } )
        }
        catch(err) {
            console.log(err);
        }
    }

    const GoogleAuthentication = () => {
        signInWithPopup(auth, googleProvider)
        .then(user => {
            setUsername(user.user.displayName)
            // console.log(user.user.email)
            setUseremail(user.user.email)
            setUserimage(user.user.photoURL)
            // console.log(useremail)
            QueryDatabase();
        })
        .catch(err => {console.log(err)}) //ERROR TO BE COMPLETED
    }

    const logout = () => {
        signOut(auth)
        .then(msg => {
            console.log("LOG OUT")
            setUseremail("");
            setUserimage("");
            setUsername("");
        })
        .catch(err => {console.log(err)})
    }

    return(
        <div>
            <button onClick={GoogleAuthentication}>Login</button>
            <button onClick={logout}>Log out</button>
            {auth.currentUser == null ? "" : <User useremail={useremail}/>}
        </div>
    )
}