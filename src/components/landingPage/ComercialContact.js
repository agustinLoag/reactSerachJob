import React from "react"
import styles from "./css/ComercialContact.module.css"
const ComercialContact = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.titleContact}>Contacto Comercial</h2>
        <p className={styles.textContact}>
          Si tu empresa se quiere sumar al reclutamiento del
        </p>
        <p className={styles.textContact}>
          futuro, escríbenos a <strong>ventas@jobfitter.cl</strong>
        </p>
      </div>
    </div>
  )
}

export default ComercialContact
