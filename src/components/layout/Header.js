import React from "react"
import { Link } from "gatsby"
import styles from "./css/Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleLogo}>Jobfitter</div>
      <div className={styles.links}>
        <Link
          to="/"
          className={styles.itemLink}
          activeStyle={{ fontWeight: 800 }}
        >
          Inicio
        </Link>

        <Link
          to="/vacancies"
          className={styles.itemLink}
          activeStyle={{ fontWeight: 800 }}
        >
          Vacantes
        </Link>
        <Link
          to="/vacancies"
          className={styles.itemLink}
          activeStyle={{ fontWeight: 800 }}
        >
          Sube tu CV
        </Link>
      </div>
    </div>
  )
}

export default Header
