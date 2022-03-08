import React, { useState, useContext, useEffect } from "react"
import { TextField, Button } from "@material-ui/core"
import { navigate } from "gatsby"
import styles from "./css/Login.module.css"
import AuthContext from "../../context/auth/authContext"
const Login = props => {
  console.log("props", props)
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { email, password } = user

  //Contexto

  const authContext = useContext(AuthContext)
  const { authenticated, signIn } = authContext

  //UseEffect

  useEffect(() => {
    if (authenticated === true) {
      navigate("/vacancies")
    }
  }, [])

  const handleInputChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const submitLogin = e => {
    e.preventDefault()

    signIn(user)
    navigate("/vacancies")
  }
  return (
    <div className={styles.containerLogin}>
      <h2>Login</h2>
      <form onSubmit={submitLogin}>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoFocus
          value={email}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={handleInputChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Iniciar Sesion
        </Button>
      </form>
    </div>
  )
}

export default Login
