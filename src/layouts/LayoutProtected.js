import React from "react"
import HeaderAdmin from "../components/layout/admin/HeaderAdmin"
import FooterAdmin from "../components/layout/admin/FooterAdmin"
import styles from "./css/LayoutProtected.module.css"

const LayoutProtected = props => {
  const { children } = props
  return (
    <>
      <HeaderAdmin />
      <div className={styles.contentChildren}>{children}</div>
      <FooterAdmin />
    </>
  )
}

export default LayoutProtected
