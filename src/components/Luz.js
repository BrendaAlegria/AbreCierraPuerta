import React, { useState } from "react";

export function LuzControl() {
  const [intensidad, setIntensidad] = useState("Apagado");

  function aumentarIntensidad() {
    const intensidades = ["Apagado", "Encendido al 25%", "Encendido al 50%", "Encendido al 75%", "Encendido al 100%"];
    const currentIndex = intensidades.indexOf(intensidad);
    if (currentIndex < intensidades.length - 1) {
      setIntensidad(intensidades[currentIndex + 1]);
    } else {
      setIntensidad(intensidades[0]);
    }
  }

  function disminuirIntensidad() {
    const intensidades = ["Apagado", "Encendido al 25%", "Encendido al 50%", "Encendido al 75%", "Encendido al 100%"];
    const currentIndex = intensidades.indexOf(intensidad);
    if (currentIndex > 0) {
      setIntensidad(intensidades[currentIndex - 1]);
    } else {
      setIntensidad(intensidades[intensidades.length - 1]);
    }
  }

  function resetearIntensidad() {
    setIntensidad("Apagado");
  }
  return (
    <>
      <center>
        <h1>Estado de La luz</h1>
        <div>Estado de la luz: {intensidad}</div>
        <br></br>
        <button onClick={aumentarIntensidad}>Aumentar</button>
        
        <br></br>
        <button onClick={disminuirIntensidad}>Disminuir</button>
        <button onClick={resetearIntensidad}>Resetear</button>
        <br />
        <br />
        <br />
      </center>
    </>
  );
}
