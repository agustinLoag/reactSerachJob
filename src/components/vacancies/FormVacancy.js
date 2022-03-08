import React, { useState } from "react"
import { Grid, Paper, Button } from "@material-ui/core"
import { useQuery, useMutation } from "@apollo/client"
import { FaAngleDown } from "react-icons/fa"
import styles from "./css/FormVacancy.module.css"
import stylesTwo from "../vacancies/css/BannerVacancy.module.css"
import { GET_ALLUSERS } from "../../gql/users"
import { REGISTER_VACANCY, GET_VACANCY } from "../../gql/vacancies"
import { navigate } from "@reach/router"

const initialInputValues = {
  type: "",
  question: "",
}
const FormVacancy = props => {
  console.log(props)
  const [vacancy, setVacancy] = useState({
    title: "",
    state: "",
    location: "",
    maximun_rent: 0,
    description: "",
    supervisor: "",
    createdBy: "",
    questions: [],
  })

  const {
    title,
    state,
    location,
    maximun_rent,
    description,
    supervisor,
    createdBy,
  } = vacancy

  const [que, setQue] = useState([])
  const [inputValues, setInputValues] = useState(initialInputValues)
  const handleQuestionState = e => {
    e.persist()
    const value = e.target.value
    console.log(value)
    setInputValues(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  const { type, question, answers } = inputValues
  const { data: users, loading } = useQuery(GET_ALLUSERS)
  const { data: vacan, loading: loadV } = useQuery(GET_VACANCY)
  const [registerVacancy] = useMutation(REGISTER_VACANCY)
  const handleInputs = e => {
    setVacancy({
      ...vacancy,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegisterVacancy = async e => {
    e.preventDefault()
    const newVacancy = vacancy
    newVacancy.createdBy = "5fdbdcd76c817635c4364865"
  }
  const onSaveQuestions = e => {
    e.preventDefault()
    console.log(inputValues)
    setQue(prev => [...prev, inputValues])
    console.log(que)
  }

  const onSaveVancancy = async e => {
    const editVacancy = vacancy
    editVacancy.createdBy = "5fdbdcd76c817635c4364865"
    editVacancy.maximun_rent = parseInt(maximun_rent)
    editVacancy.questions = que
    const newVacancy = editVacancy
    console.log("Vacan", newVacancy)
    try {
      const result = await registerVacancy({
        variables: {
          input: { ...newVacancy },
        },
      })
      if (result) {
        setTimeout(() => {
          navigate("/vacancies")
        }, 1500)
      }
    } catch (error) {
      console.log("*****", error)
    }
  }
  return (
    <>
      {loadV && <div>Cargando</div>}
      {props.xxx == undefined && (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
          className={stylesTwo.mainContent}
        >
          <div className={stylesTwo.title}>Vacantes</div>
          <div>
            <button
              onClick={onSaveVancancy}
              className={stylesTwo.btnAddVacancy}
            >
              Guardar
            </button>
          </div>
        </Grid>
      )}

      <Grid container direction="row">
        <Grid item sm={6} className={styles.mainContentForm}>
          <Paper className={styles.questions}>
            <h2 className={styles.titleHead}>Informacion</h2>
            <hr className={styles.hrLine} />
            <form
              onSubmit={handleRegisterVacancy}
              autoComplete="off"
              className={styles.formVacancy}
            >
              <div className={styles.inputGroup}>
                <input
                  name="nombreX"
                  value={nombreX}
                  onChange={cambioInputs}
                  type="text"
                  placeholder="Ingresa un Titulo"
                />
                <label htmlFor="text">Titulo de la Vacante</label>
              </div>

              <div className={styles.inputGroup}>
                <FaAngleDown className={styles.iconSelect} />
                <select
                  name="supervisor"
                  value={supervisor}
                  className={styles.selectMain}
                  onChange={handleInputs}
                >
                  <option defaultValue hidden>
                    Selecciona un encargado
                  </option>
                  {loading
                    ? null
                    : users.getUsers.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.mail}
                        </option>
                      ))}
                </select>
                <label htmlFor="text">Encargado</label>
              </div>

              <div className={styles.inputGroup}>
                <FaAngleDown className={styles.iconSelect} />
                <select
                  name="state"
                  value={state}
                  onChange={handleInputs}
                  className={styles.selectMain}
                >
                  <option defaultValue hidden>
                    Selecciona un estado
                  </option>
                  <option value="Activa">Activa</option>
                  <option value="Desvinculada">Desvinculada</option>
                </select>
                <label htmlFor="text">Estado</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  name="cardNumber"
                  value={cardNumber}
                  type="text"
                  onChange={cambioInputs}
                />
                <label htmlFor="text">Ubicacion</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  name="maximun_rent"
                  value={maximun_rent}
                  onChange={handleInputs}
                  type="number"
                  placeholder=""
                />
                <label htmlFor="text">Renta Maxima</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  name="description"
                  value={description}
                  onChange={handleInputs}
                  type="text"
                  placeholder="Ingresa informacion detallada de la vacante"
                />
                <label htmlFor="text">Descripcion</label>
              </div>
            </form>
          </Paper>
        </Grid>

        {/* ===================
      Questions
      =================== */}
        <Grid item sm={6} className={styles.mainContentForm}>
          <Paper className={styles.questions}>
            <h2 className={styles.titleHead}>Cuestionario</h2>
            <hr className={styles.hrLine} />
            <form onSubmit={onSaveQuestions}>
              <div className={styles.inputGroup}>
                <FaAngleDown className={styles.iconSelect} />
                <select
                  onChange={handleQuestionState}
                  name="type"
                  value={type}
                  className={styles.selectMain}
                >
                  <option defaultValue hidden></option>
                  <option value="Abierta">Abierta</option>
                  <option value="Opcion Multiple">Opcion Multiple</option>
                </select>
                <label htmlFor="text">Tipo de Pregunta</label>
              </div>

              {/* checar si es pregunta abierta o opicon multiple */}

              <div className={styles.inputGroup}>
                <input
                  name="question"
                  value={question}
                  onChange={handleQuestionState}
                  type="text"
                  placeholder="Ingresa informacion detallada de la vacante"
                />
                <label htmlFor="text">Pregunta</label>
              </div>
              <div className={styles.boxButton}>
                <Button
                  variant="contained"
                  className={styles.btnAddQuestion}
                  type="submit"
                >
                  Agregar Pregunta
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default FormVacancy
