import React, { useState } from "react";
function CambiaImage() {
  const [puerta, setPuerta] = useState("cerrada");

  function abierto() {
    setPuerta("abierta");
  }
  function cerrado() {
    setPuerta("cerrada");
  }
  return (
    <>
      <center>
        <h1>Abre y Cierra Puerta con 2 Botones</h1>
        <div>
          <img
            alt="Puerta"
            src={`/images/PUERTA_${puerta}.jpg`}
            width="100px"
            height="200px"
          ></img>
        </div>
        <br />
        <button onClick={abierto}>Abrir Puerta</button>
        <br/>
        <br></br>
        <button onClick={cerrado}>Cerrar Puerta</button>
      </center>
    </>
  );
}

export default CambiaImage;
