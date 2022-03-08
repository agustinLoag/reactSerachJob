import React from "react"
import LayoutProtected from "../layouts/LayoutProtected"
import FormVacancy from "../components/vacancies/FormVacancy"

const AddVacancy = props => {
  return (
    <LayoutProtected>
      <FormVacancy nav={props} />
    </LayoutProtected>
  )
}

export default AddVacancy
