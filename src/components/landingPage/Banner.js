import React from "react"
import styles from "./css/Banner.module.css"
const Banner = () => {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.titleBanner}>
        <h2>Bienvenido al reclutamiento</h2>
        <h2>del futuro</h2>
        <button className={styles.btnBanner}>Ver vacantes</button>
      </div>
    </div>
  )
}

export default Banner
