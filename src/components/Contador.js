import { useState } from "react";

export function Contador (){
    const [cont,setCont]=useState(0);

    function avanzar(){
        setCont(cont+1);

    }
    return(
        <>
        <center>
        <h1> Contador</h1>
        <div>El contador es : {cont}</div>

        <button onClick={avanzar}>Incrementar el contador</button>
        <br></br>
        <br></br>
        <br></br>
        </center>
        
        </>
    )

}