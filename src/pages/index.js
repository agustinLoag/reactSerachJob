import React from "react"
import LayoutMain from "../layouts/LayoutMain"
import Banner from "../components/landingPage/Banner"
import Steps from "../components/landingPage/Steps"
import ComercialContact from "../components/landingPage/ComercialContact"

const LandingPage = () => {
  return (
    <LayoutMain>
      <Banner />
      <Steps />
      <ComercialContact />
    </LayoutMain>
  )
}

export default LandingPage
