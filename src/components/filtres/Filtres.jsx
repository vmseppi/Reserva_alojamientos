import React from "react";
import styles from "../filtres/Filtres.module.css";

//para controlar las fechas
function Filtres(props) {
  const manejarCambioFechaDesde = (e) => {
    props.setDesde(e.target.value);
  };

  const manejarCambioFechaHasta = (e) => {
    props.setHasta(e.target.value);
  };

  //manejar cambio de selector pais
  const seleccionpais = (evento) => {
    const paisseleccionado = evento.target.value;
    props.setCountry(paisseleccionado);
  };

  //para controlar los precios
  const manejarCambioPrecio = (evento) => {
    const precioSeleccionado = evento.target.value;
    props.setPrice(precioSeleccionado);
  };

  //manejar cambio de selector tamaño
  const seleccionroom = (evento) => {
    const tamañoseleccionado = evento.target.value;
    props.setRooms(tamañoseleccionado);
  };

  // boton de reseteo
  const resetearfiltros = (e) => {
    e.preventDefault();
    props.setHasta(props.estadoInicial.hastaEstadoI);
    props.setDesde(props.estadoInicial.desdeEstadoI);
    props.setRooms(props.estadoInicial.tamanio);
    props.setCountry(props.estadoInicial.lugar);
    props.setPrice(props.estadoInicial.precio);
  };

  return (
    <div className={styles.seleccionfiltro}>
      <div className={styles.espaciofiltros}>
        <div className="contenedorfiltros">
          <input
            value={props.estadoInicial.desde}
            onChange={manejarCambioFechaDesde}
            className="filtrofecha"
            type="date"
          />
        </div>
        <div className="contenedorfiltros">
          <input
            value={props.estadoInicial.hasta}
            onChange={manejarCambioFechaHasta}
            type="date"
          />
        </div>
        <div className={styles.contenedorfiltros}>
          <select
            value={props.price}
            onChange={manejarCambioPrecio}
            clasName="opcionprecio"
            name=""
            id=""
          >
            <option value={props.estadoInicial.precio}>
              {props.estadoInicial.precio}
            </option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
        <div className={styles.contenedorfiltros}>
          <select
            value={props.country}
            onChange={seleccionpais}
            clasName="opcionselector"
            name=""
            id=""
          >
            <option value={props.estadoInicial.lugar}>
              {props.estadoInicial.lugar}
            </option>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
          </select>
        </div>
        <div className={styles.contenedorfiltros}>
          <select
            value={props.rooms}
            onChange={seleccionroom}
            clasName="opcionselector"
            name=""
            id=""
          >
            <option value={props.estadoInicial.tamanio}>
              {props.estadoInicial.tamanio}
            </option>
            <option value="pequenio">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <button onClick={resetearfiltros} className={styles.btnreset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Filtres;
