import "./styles.css";
import Header from "./components/header/Header";
import Filtres from "./components/filtres/Filtres";
import { hotelsData } from "./data";
import { useState } from "react";
import Hoteles from "./components/hoteles/Hoteles.jsx";

export default function App() {
  const estadoInicial = {
    desdeEstadoI: "Seleccione una fecha",
    hastaEstadoI: "Seleccione una fecha",
    lugar: "Todos los paises",
    precio: "Cualquier precio",
    tamanio: "Cualquier tamaño"
  };

  let [desde, setDesde] = useState(estadoInicial.desdeEstadoI);
  let [hasta, setHasta] = useState(estadoInicial.hastaEstadoI);
  let [country, setCountry] = useState(estadoInicial.lugar);
  let [price, setPrice] = useState(estadoInicial.precio);
  let [rooms, setRooms] = useState(estadoInicial.tamanio);
  // ELEMENTOS FECHAS

  let Ds_desde = new Date(desde + "T00:00:00");
  let Ds_hasta = new Date(hasta + "T00:00:00");
  //

  //opciones para date string
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let desdeNatural = Ds_desde.toLocaleDateString("es-AR", options);
  let hastaNatural = Ds_hasta.toLocaleDateString("es-AR", options);

  let tiemposunixdesde = Ds_desde.getTime();
  let tiemposunixhasta = Ds_hasta.getTime();

  //filtros de hoteles

  const crearListaFiltrada = () => {
    const nuevaLista = hotelsData
      .filter((hotel) => {
        if (
          desde !== estadoInicial.desdeEstadoI &&
          hasta !== estadoInicial.hastaEstadoI
        ) {
          return (
            hotel.availabilityFrom >= tiemposunixdesde &&
            hotel.availabilityTo <= tiemposunixhasta
          );
        } else {
          return hotel;
        }
      })
      .filter((hotel) => {
        if (country !== estadoInicial.lugar) {
          return hotel.country.toLowerCase() === country;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (rooms !== estadoInicial.tamanio) {
          if (rooms === "pequenio") {
            return hotel.rooms <= 10;
          } else if (rooms === "mediano") {
            return hotel.rooms >= 10 && hotel.rooms <= 20;
          } else {
            return hotel.rooms > 20;
          }
        }
        return hotel;
      })
      .filter((hotel) => {
        if (price !== estadoInicial.precio) {
          /*  if (transformarprecio > 0 && transformarprecio < 1) {
            transformarprecio = "Economico";
          } else if (transformarprecio > 1 && transformarprecio <= 2) {
            transformarprecio = "Regular";
          } else if (transformarprecio > 2 && transformarprecio < 3) {
            transformarprecio = "Familiar";
          } else {
            transformarprecio = "Premium";
          }
          return hotel.price == price;
        } */
          return hotel.price === Number(price);
        }
        return hotel;
      });
    return nuevaLista;
  };

  let mostrarListaFiltrada = crearListaFiltrada();

  return (
    <div className="App">
      <Header
        country={country}
        price={price}
        rooms={rooms}
        desdeNatural={desdeNatural}
        hastaNatural={hastaNatural}
      />
      <Filtres
        estadoInicial={estadoInicial}
        price={price}
        setPrice={setPrice}
        country={country}
        setCountry={setCountry}
        rooms={rooms}
        setRooms={setRooms}
        desde={desde}
        setDesde={setDesde}
        hasta={hasta}
        setHasta={setHasta}
      />
      <div>
        {mostrarListaFiltrada.length === 0 ? (
          <p className="cartelerror">
            No encontramos hoteles con esas caracteristicas
          </p>
        ) : (
          <Hoteles mostrarListaFiltrada={mostrarListaFiltrada} />
        )}
      </div>
    </div>
  );
}
