import React from "react";
import EyesonMe from "./EyesOnMe";

function Keypad(){

    function change(){
        console.log('Entering password...')
    }

    return (
            <input type="password" onChange={change} />
    )
}

export default Keypad;