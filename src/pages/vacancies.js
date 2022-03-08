import React from "react"
import { Router as MyRouter } from "@reach/router"
import Vacancies from "../modules/vacancies"
import AddVacancy from "./addvacancy"

import DetailVacancy from "../components/vacancies/DetailVacancy"

const Router = () => {
  return (
    <MyRouter>
      <Vacancies path="/vacancies" />
      <AddVacancy path="/vacancies/addvacancy" />

      <DetailVacancy path="/vacancies/addvacancy/:id" />
    </MyRouter>
  )
}
export default Router
