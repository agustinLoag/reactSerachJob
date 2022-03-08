const { LOGIN_SUCCESS, LOGIN_ERROR } = require("../../types")

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      window.localStorage.setItem("Authorization", action.payload.data.login.token)
      return {
        ...state,
        authenticated: true,
        token: action.payload.data.login.token,
        message: null,
      }

    case LOGIN_ERROR:
      window.localStorage.removeItem("Authorization")
      return {
        ...state,
        token: null,
        user: null,
        authenticated: false,
        message: action.payload,
      }

    default:
      break
  }
}
