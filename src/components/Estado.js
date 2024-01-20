import { useState } from "react";

export function Estado (){
    const [cont,setCont]=useState(0);

    function aumentar(){
        if (cont < 10) {
            setCont(cont+1);
        }
        
    }
    
    function quitar(){
        if(cont > 0){
            setCont(cont-1);
        }
        
    }
    function reinicia(){
        setCont(0);
    }
    return(
        <>
        <center>
        <h1>Estado del Contador</h1>
        <div>El contador es : {cont}</div>
        <button onClick={aumentar}>Incrementar el contador</button>
        <br></br>
        <br></br>
        <button onClick={quitar}>Disminiur el contador</button>
        <br></br>
        <br></br>
        <button onClick={reinicia}>Reiniciar el contador</button>

        </center>
        
        </>
    )
    

}