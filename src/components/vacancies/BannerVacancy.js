import React from "react"
import { Grid } from "@material-ui/core"
import { Link } from "gatsby"

import styles from "./css/BannerVacancy.module.css"

const BannerVacancy = props => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-end"
      className={styles.mainContent}
    >
      <div className={styles.title}>Vacantes</div>
      <div className={styles.btnAddVacancy}>
        <Link to="/vacancies/addvacancy" className={styles.btnAddVacancy}>
          Agregar Vacante
        </Link>
      </div>
    </Grid>
  )
}

export default BannerVacancy
