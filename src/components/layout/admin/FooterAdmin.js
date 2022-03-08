import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./css/FooterAdmin.module.css"
const FooterAdmin = () => {
  const year = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query Imagess {
      link: file(relativePath: { eq: "link.png" }) {
        childImageSharp {
          fixed(height: 35, width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.mainContentFooter}>
      <div className={styles.footerUp}>
        <div className={styles.titleFooter}>Jobfitter</div>
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

export default FooterAdmin
