import React from "react";
import "./hoteles.css";
import Card from "/src/components/card/Card.jsx";

const ListaHoteles = ({ mostrarListaFiltrada }) => {
  return (
    <div className="main-container">
      {mostrarListaFiltrada.map((hotel, i) => {
        return <Card hotel={hotel} key={i} />;
      })}
    </div>
  );
};

export default ListaHoteles;
