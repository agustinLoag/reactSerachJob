import React, { useState } from "react"
import LayoutMain from "../layouts/LayoutMain"
import { useMutation } from "@apollo/client"
import { REGISTER_USER } from "../gql/users"

const Register = () => {
  const [usuario, setUsuario] = useState({
    mail: "",
    password: "",
    role: "",
    company: "",
  })
  const { mail, password, role, company } = usuario
  const [registerUsers] = useMutation(REGISTER_USER)
  const handleInputs = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }
  const handleRegisterUser = async e => {
    e.preventDefault()
    try {
      const newUser = usuario
      console.log(newUser)
      const result = await registerUsers({
        variables: {
          input: { ...newUser },
        },
      })
    } catch (err) {
      console.log("*****", err)
    }
  }

  return (
    <LayoutMain>
      <form onSubmit={handleRegisterUser}>
        <div>
          <label htmlFor="mail">Mail</label>
          <input type="text" name="mail" value={mail} onChange={handleInputs} />
        </div>
        <div>
          <label htmlFor="mail">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputs}
          />
        </div>

        <div>
          <label htmlFor="mail">Empresa</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={handleInputs}
          />
        </div>

        <div>
          <label htmlFor="mail">Rol</label>
          <input type="text" name="role" value={role} onChange={handleInputs} />
        </div>

        <div>
          <button type="submit">Crear usuario</button>
        </div>
      </form>
    </LayoutMain>
  )
}

export default Register
