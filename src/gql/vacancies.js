import { gql } from "@apollo/client"
export const REGISTER_VACANCY = gql`
  mutation registroVacantes($input: VacancyInput) {
    registerVacancy(input: $input) {
      title
    }
  }
`
export const GET_ALLVACANCIES = gql`
  query getVacancies($state: String, $search: String) {
    getVacancies(state: $state, search: $search) {
      id
      title
      location
      state
    }
  }
`
export const GET_VACANCY = gql`
  query getVacancyID($id: ID!) {
    getVacancyID(id: $id) {
      id
      title
      location
      maximun_rent
      description
      supervisor {
        id
        mail
      }
      state
    }
  }
`

export const UPDATE_VACANCY = gql`
  mutation updateVacancy($input: UpdateVacancyInput) {
    updateVacancy(id: "5fdc9439dbc9bc3ee4dbbd4e", input: $input) {
      description
    }
  }
`

export const GET_CANDIDATESFROMVACANCY = gql`
  query getCandidatesFromVacancy(
    $id: ID
    $state: String
    $search: String
    $renta: Float
  ) {
    getCandidatesVacancy(
      id: $id
      state: $state
      search: $search
      renta: $renta
    ) {
      id
      name
      state
      expected_income
      telephone
      video_Link
    }
  }
`

export const GET_HISTORY = gql`
  query getHistory($name: String) {
    getHistoryVacancies(name: $name) {
      vacancy_Id {
        id
        title
      }
    }
  }
`
