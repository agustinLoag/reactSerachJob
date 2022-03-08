import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import ReactPlayer from "react-player"

import { Grid, Paper, Checkbox } from "@material-ui/core"
import { FaAngleDown, FaSearch } from "react-icons/fa"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import style from "./css/ListCandidate.module.css"
import styles from "./css/ListVacancies.module.css"
import stylesInput from "./css/FormVacancy.module.css"

import { GET_CANDIDATESFROMVACANCY, GET_HISTORY } from "../../gql/vacancies"

const ListCandidates = props => {
  console.log("Props lista de Candidatos", props)
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
  console.log(renta)

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

      <Grid
        container
        direction="column"
        spacing={3}
        className={styles.mainContentList}
      >
        {loading && <div>Cargando....</div>}
        {data &&
          data.getCandidatesVacancy.map(candidate => {
            return (
              <Grid key={candidate.id} item xs>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<FaAngleDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Checkbox color="primary" />
                    <div className={style.containerText}>
                      <Typography className={style.textName}>
                        {candidate.name}
                      </Typography>

                      <Typography className={style.textState}>
                        {candidate.state}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={6}>
                        <div className={stylesInput.inputGroup}>
                          <input
                            name="maximun_rent"
                            type="number"
                            placeholder=""
                            value={candidate.telephone}
                          />
                          <label htmlFor="text">Numero de Telefono</label>
                        </div>
                        <div className={stylesInput.inputGroup}>
                          <input
                            name="maximun_rent"
                            type="number"
                            placeholder=""
                            value={candidate.expected_income}
                          />
                          <label htmlFor="text">Expectativa de Renta</label>
                        </div>
                        <Typography className={style.textSection}>
                          Historial de Postulaciones
                        </Typography>
                        <History nombre={candidate.name} />
                        <Typography className={style.textSection}>
                          Video
                        </Typography>
                        <div className={style.videoContainer}>
                          <ReactPlayer url={candidate.video_Link} controls />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper></Paper>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            )
          })}
      </Grid>
    </Grid>
  )
}

const History = props => {
  const { nombre } = props

  const { data, loading, error } = useQuery(GET_HISTORY, {
    variables: {
      name: nombre,
    },
  })
  console.log("Data", data)
  return (
    <div>
      {loading && <div>Cargando....</div>}
      {data &&
        data.getHistoryVacancies.map(history => (
          <div key={history.vacancy_Id.id} className={stylesInput.inputGroup}>
            <input
              name="maximun_rent"
              type="text"
              placeholder=""
              value={history.vacancy_Id.title}
            />
            <label htmlFor="text">Cargo</label>
          </div>
        ))}
    </div>
  )
}
export default ListCandidates
