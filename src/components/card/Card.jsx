import React from "react";
import "/src/components/card/card.module.css";
import bed from "/src/components/card/bed.png";
import placeholder from "/src/components/card/placeholder.png";
import coronavirus from "/src/components/card/coronavirus.png";

function Card({ hotel }) {
  return (
    <div className="conteinercard">
      <div className="cardformat">
        <img src={hotel.photo} height="200px" alt={hotel.name}></img>
        <p className="namehotel">{hotel.name}</p>
        <div className="descripciontarjeta">{hotel.description}</div>
        <div className="ubicacioncard">
          <div className="conteinerplace">
            <img className="placeholder" src={placeholder} alt="" />
          </div>
          <div className="hotelcity">{hotel.city}</div>
        </div>
        <div className="habitacionescard">
          <div className="conteinercamita">
            <img className="camita" src={bed} alt="" />
          </div>
          <div className="contenedordatoscama">
            <div className="cantidadcamas">{hotel.rooms}</div>
            <div className="habitacionpalabra">Habitaciones</div>
          </div>
        </div>
        <div className="conteinercountry">
          <div className="coronaconteiner">
            <img className="countryicon" src={coronavirus} alt="" />
          </div>
          <div className="namecountry">{hotel.country}</div>
        </div>
        <div className="conteinerprecio">
          <div>
            <span>$</span>
            <span className={hotel.price >= 2 ? "" : "precio-desactivado"}>
              $
            </span>
            <span className={hotel.price >= 3 ? "" : "precio-desactivado"}>
              $
            </span>
            <span className={hotel.price >= 4 ? "" : "precio-desactivado"}>
              $
            </span>
          </div>
        </div>
        <button className="conteineerreserva">Reservar</button>
      </div>
    </div>
  );
}

export default Card;
