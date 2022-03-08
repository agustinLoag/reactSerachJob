import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import ReactPlayer from "react-player"

import { Grid, Paper, Checkbox } from "@material-ui/core"
import { FaAngleDown, FaSearch } from "react-icons/fa"

import Typography from "@material-ui/core/Typography"
import style from "./css/ListCandidate.module.css"
import styles from "./css/ListVacancies.module.css"
import stylesInput from "./css/FormVacancy.module.css"
import styleVideo from "./css/GridVacancy.module.css"
import { GET_CANDIDATESFROMVACANCY, GET_HISTORY } from "../../gql/vacancies"

const GridVacancy = props => {
  const { id } = props
  const [search, setSearch] = useState("")
  const [stateVacancy, setStateVacancy] = useState("Ver Todas")
  const [renta, setRenta] = useState(0)

  const { data, loading } = useQuery(GET_CANDIDATESFROMVACANCY, {
    variables: {
      id,
      state: stateVacancy,
      search,
      renta,
    },
  })
  console.log(data)

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  return (
    <Grid className={style.mainContent}>
      <Grid className={style.mainFilter}>
        <Grid item>
          <div className={styles.dropdown}>
            <select
              name="stateVacancy"
              value={stateVacancy}
              onChange={e => setStateVacancy(e.target.value)}
              className={styles.dropdownSelect}
            >
              <option value="Ver Todas" className={styles.titleItems}>
                Ver Todas
              </option>
              <option value="Por Contactar" className={styles.titleItems}>
                Por Contactar
              </option>
              <option value="Contratado" className={styles.titleItems}>
                Contratado
              </option>
              <option value="Video Solicitado" className={styles.titleItems}>
                Video Solicitado
              </option>
              <option value="Desvinculado" className={styles.titleItems}>
                Desvinculado
              </option>
            </select>
            <FaAngleDown className={styles.iconArrow} />
          </div>
        </Grid>
        <Grid>
          <div className={style.boxRenta}>
            <div className={style.titleRenta}>Renta máxima</div>
            <div className={stylesInput.inputGroup}>
              <input
                name="search"
                value={renta}
                onChange={e => setRenta(parseFloat(e.target.value))}
                type="number"
                placeholder="Ingresa una renta..."
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={7} className={styles.searchInput}>
          <div className={styles.box}>
            <FaSearch className={styles.iconSearch} />
            <input
              name="search"
              value={search}
              onChange={handleSearchChange}
              type="text"
              placeholder="Buscar..."
            />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {data &&
          data.getCandidatesVacancy.map(candidate => (
            <Grid
              className={styleVideo.mainContentCard}
              key={candidate.id}
              item
              xs={6}
            >
              <Paper elevation={3} square className={styleVideo.boxItems}>
                <div className={styleVideo.textName}>
                  <Typography
                    className={styleVideo.text}
                    variant="h4"
                    component="h3"
                  >
                    {candidate.name}
                  </Typography>
                </div>
                <div className={styleVideo.videoPlayer}>
                  <ReactPlayer
                    width="95%"
                    height="400px"
                    url={candidate.video_Link}
                    controls
                  />
                </div>
                <div className={styleVideo.containerButtons}>
                  <input type="radio" name="Me Gusta" id="" />
                  <label htmlFor="">Me Gusta</label>

                  <input type="radio" name="Me Gusta" id="" />
                  <label htmlFor="">No me Gusta</label>
                </div>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}

export default GridVacancy
