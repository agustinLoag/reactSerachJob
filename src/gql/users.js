import { gql } from "@apollo/client"

export const REGISTER_USER = gql`
  mutation createUser($input: UsersInput) {
    registerUsers(input: $input) {
      mail
      company
    }
  }
`
export const GET_ALLUSERS = gql`
  query {
    getUsers {
      id
      mail
    }
  }
`

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`
