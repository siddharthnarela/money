import { useState } from "react";
import Module1 from "./module1";
import Module2 from "./module2";
import Module3 from "./module3";

export default function ModuleDisplay({id})
{

    const [module1, setModule1] = useState(false); //INITIAL VIEW OF MODULE 1
    const [module2, setModule2] = useState(false); //INITIAL VIEW OF MODULE 2
    const [module3, setModule3] = useState(false); //INITIAL VIEW OF MODULE 3

    return(
        <div>
            <button onClick={setModule1(true)}>Module 1</button>
            <button onClick={setModule2(true)}>Module 2</button>
            <button onClick={setModule3(true)}>Module 3</button>
            {module1 && <Module1 />}
            {module2 && <Module2 />}
            {module3 && <Module3 />}
            
        </div>
    )
}