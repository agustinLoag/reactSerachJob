import React from "react"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
const LayoutMain = props => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default LayoutMain
