import React, { useState } from "react";

function CambiaImagen() {
  const [puerta, setPuerta] = useState("cerrada");

  function togglePuerta() {
    setPuerta((estadoAnterior) => (estadoAnterior === "cerrada" ? "abierta" : "cerrada"));
  }

  return (
    <>
      <center>
        <h1>Abre y Cierra Puerta con un Boton</h1>
        <div>
          <img
            alt="Puerta"
            src={`/images/PUERTA_${puerta}.jpg`}
            width="100px"
            height="200px"
          />
        </div>
        <br />
        <button onClick={togglePuerta}>Abrir o Cerrar Puerta</button>
      </center>
    </>
  );
}

export default CambiaImagen;
