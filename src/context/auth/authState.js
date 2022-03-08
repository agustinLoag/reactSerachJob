import React, { useReducer } from "react"
import { useMutation } from "@apollo/client"
import AuthReducer from "./authReducer"
import AuthContext from "./authContext"
import { LOGIN } from "../../gql/users"
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../types"

const AuthState = props => {
  const initalState = {
    token: window.localStorage.getItem("Authorization"),
    authenticated: false,
    user: null,
    message: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initalState)
  const [login] = useMutation(LOGIN)
  console.log("Initial", initalState.token)

  const signIn = async data => {
    console.log("data", data)
    try {
      const result = await login({
        variables: {
          input: {
            ...data,
          },
        },
      })
      if (!result) {
        return dispatch({
          type: LOGIN_ERROR,
        })
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: result,
      })
    } catch (error) {
      console.log("Error login", error.response)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
