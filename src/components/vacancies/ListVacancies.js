import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useQuery } from "@apollo/client"
import { Grid, Paper } from "@material-ui/core"
import { FaAngleDown, FaSearch } from "react-icons/fa"
import styles from "./css/ListVacancies.module.css"
import { GET_ALLVACANCIES } from "../../gql/vacancies"

const ListVacancies = () => {  
  const [search, setSearch] = useState("")
  const [stateVacancy, setStateVacancy] = useState("Ver Todas")
  const token = localStorage.getItem("Authorization")
  console.log("Tokeeen", token)

  const { data, loading, error } = useQuery(GET_ALLVACANCIES, {
    variables: {
      state: stateVacancy,
      search,
    },
  })
  if (error) {
    console.log(error)
  }

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const handleSelectChange = e => {
    console.log("evento", e.target.name)
  }

  const changeColor = id => {
    navigate(`/vacancies/addvacancy/${id}`)
  }
  return (
    <div className={styles.mainContent}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={styles.mainContentItems}
      >
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
              <option value="Activa" className={styles.titleItems}>
                Activa
              </option>
              <option value="Desvinculada" className={styles.titleItems}>
                Desvinculadas
              </option>
            </select>
            <FaAngleDown className={styles.iconArrow} />
          </div>
        </Grid>
        <Grid item xs={9} className={styles.searchInput}>
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
          data.getVacancies.map(vac => (
            <Grid onClick={() => changeColor(vac.id)} key={vac.id} item xs>
              <Paper variant="elevation" square className={styles.paperList}>
                <div className={styles.infoVacancy}>
                  <h4>{vac.title}</h4>
                  <p className={styles.location}> en {vac.location}</p>
                </div>
                <div className={styles.items}> Opciones</div>
              </Paper>
            </Grid>
          ))}
      </Grid>

      {/* <Grid container direction="column" spacing={3} className={styles.disable}>
        {filterDesactive !== undefined &&
          filterDesactive.map(vac => (
            <Grid item xs>
              <Paper variant="elevation" square className={styles.paperList}>
                <div className={styles.infoVacancy}>
                  <h4>{vac.title}</h4>
                  <p className={styles.location}> en {vac.location}</p>
                </div>
                <div className={styles.items}> Opciones</div>
              </Paper>
            </Grid>
          ))}
      </Grid> */}
    </div>
  )
}

export default ListVacancies
