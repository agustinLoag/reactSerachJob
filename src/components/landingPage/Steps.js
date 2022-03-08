import React from "react"
import styles from "./css/Steps.module.css"
const Steps = () => {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.stepTitle}>
        <h2>¿Cómo funciona?</h2>
      </div>
      <div className={styles.stepNumbers}>
        <div className={styles.contentInfo}>
          <div className={`${styles.stepNumber} ${styles.stepOne}`}>1</div>
          <h2 className={styles.stepSubTitle}>Postula a una Vacante</h2>
          <p>Aplica en simples pasos. ¡No necesitas registrarte!</p>
          <p></p>
        </div>

        <div className={styles.contentInfo}>
          <div className={`${styles.stepNumber} ${styles.stepTwo}`}>2</div>
          <h2 className={styles.stepSubTitle}>Sube tu video</h2>
          <p>
            Si pasas a la siguiente etapa, pediremos tu video de presentación
            personal.
          </p>
        </div>

        <div className={styles.contentInfo}>
          <div className={`${styles.stepNumber} ${styles.stepThree}`}>3</div>
          <h2 className={styles.stepSubTitle}>Entrevista con Cliente</h2>
          <p>
            Jobfitter te presentará en aquellos trabajos donde tengas mayor
            probabilidad de ser feliz.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Steps
