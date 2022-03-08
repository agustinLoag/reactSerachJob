import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Modal from "@material-ui/core/Modal"

import Login from "../users/Login"
import styles from "./css/Footer.module.css"

const Footer = () => {
  const [open, setOpen] = useState(false)

  const year = new Date().getFullYear()

  const data = useStaticQuery(graphql`
    query Images {
      link: file(relativePath: { eq: "link.png" }) {
        childImageSharp {
          fixed(height: 35, width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = <Login />

  return (
    <div className={styles.mainContentFooter}>
      <div className={styles.footerUp}>
        <div className={styles.titleFooter}>Jobfitter</div>
        <div>
          <button className={styles.btnFooter} onClick={handleOpen}>
            Ingresa como empresa
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={styles.modalLogin}
          >
            {body}
          </Modal>
        </div>
      </div>
      <hr className={styles.lineFooter} />
      <div className={styles.footerDown}>
        <div className={styles.copyRight}>&copy;{year} Jobfitter</div>
        <div className={styles.socialFooter}>
          <Img
            fixed={data.link.childImageSharp.fixed}
            alt="Jobfitter LinkedIn"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
