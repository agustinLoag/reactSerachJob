import React from "react"
import LayoutProtected from "../layouts/LayoutProtected"
import BannerVacancy from "../components/vacancies/BannerVacancy"
import ListVacancies from "../components/vacancies/ListVacancies"

const Vacancies = () => {
  return (
    <LayoutProtected>
      <BannerVacancy />
      <ListVacancies />
    </LayoutProtected>
  )
}

export default Vacancies
