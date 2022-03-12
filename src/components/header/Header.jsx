import React from "react";
import styles from "../header/Header.module.css";

function Header(props) {
  return (
    <div className={styles.encabezado}>
      <div className={styles.contenedortitulos}>
        <div>
          <h3 className={styles.hoteles}>Hoteles</h3>
        </div>
        <div className={styles.hotelesdetalles}>
          <h2 className={styles.tituloschicos}>Desde: {props.desdeNatural}</h2>
          <h2 className={styles.tituloschicos}>Hasta: {props.hastaNatural}</h2>
          <h2 className={styles.tituloschicos}>En: {props.country}</h2>
          <h2 className={styles.tituloschicos}>De: {props.price}</h2>
          <h2 className={styles.tituloschicos}>De: {props.rooms}</h2>
        </div>
      </div>
    </div>
  );
}
export default Header;
