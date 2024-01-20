import React from "react";
import ReactDom from "react-dom/client";
import CambiaImage from "./components/Images";
import CambiaImagen from "./components/Images2";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <CambiaImage/>
    <CambiaImagen/>
    </>
)