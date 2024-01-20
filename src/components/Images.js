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
        <h1>Cambiador de Imagen</h1>
        <div>
          <img
            alt="logoo"
            src={`${process.env.PUBLIC_URL}/images/${puerta}.jpg`}
          ></img>
        </div>
        <br />
        <button onClick={abierto}>Abrir Puerta</button>
        <button onClick={cerrado}>Cerrar Puerta</button>
        <br />
        <br />
        <br />
      </center>
    </>
  );
}

export default CambiaImage;
