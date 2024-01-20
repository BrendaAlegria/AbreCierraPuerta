import { useState } from "react";

export function Texto(){
    var [texto,setTexto]=useState("Encendido");

    function switch2(){
        if(texto==="Encendido"){
            setTexto("Apagadooo");
        }
        else {
            setTexto("Encendido");
        } 
    }
    return(
        <>
        <center>
            <h1>Switch Encendido o Apagado </h1>
            <div>{texto}</div>
            <button onClick={switch2}>Apagar / Encender </button>
            <br></br>
            <br></br>
            <br></br>
        </center>
        
        </>
    )
}