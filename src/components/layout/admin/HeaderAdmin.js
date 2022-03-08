import React from "react"
import styles from "./css/HeaderAdmin.module.css"
import { Link } from "gatsby"
const HeaderAdmin = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.titleLogo}>Jobfitter</div>
      <div className={styles.header}>
        <Link
          to="/users"
          className={styles.header_items}
          activeStyle={{ fontWeight: 800 }}
        >
          Usuarios
        </Link>
        <Link
          to="/vacancies"
          className={styles.header_items}
          activeStyle={{ fontWeight: 800 }}
          partiallyActive={true}
        >
          Vacantes
        </Link>
        <Link
          to="/profile"
          className={styles.header_items}
          activeStyle={{ fontWeight: 800 }}
        >
          Perfiles
        </Link>
      </div>
      <div className={styles.header_items}>Nombre de usuario</div>
    </div>
  )
}

export default HeaderAdmin
