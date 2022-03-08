import React from "react"
import { useQuery } from "@apollo/client"
import { Grid } from "@material-ui/core"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { BsGrid3X3GapFill } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"

import styles from "./css/DetailVacancy.module.css"
import stylesTwo from "../vacancies/css/BannerVacancy.module.css"

import HeaderAdmin from "../layout/admin/HeaderAdmin"
import FooterAdmin from "../layout/admin/FooterAdmin"
import EditVacancy from "./EditVacancy"
import { GET_VACANCY } from "../../gql/vacancies"
import ListCandidates from "./ListCandidates"
import GridVacancy from "./GridVacancy"

const DetailVacancy = props => {
  const { id } = props
  const { data: vacan, loading: loadV } = useQuery(GET_VACANCY, {
    variables: {
      id,
    },
  })

  return (
    <>
      {loadV && <div>Cargando....</div>}
      <HeaderAdmin />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
        className={stylesTwo.mainContent}
      >
        <div className={stylesTwo.title}>
          {loadV === false && <>{vacan.getVacancyID.title}</>}
        </div>
        <div>
          <button className={stylesTwo.btnAddVacancy}>Guardar</button>
        </div>
      </Grid>

      <Tabs>
        <TabList>
          <Tab>Datos</Tab>
          <Tab>Postulantes</Tab>
        </TabList>

        <TabPanel>
          <EditVacancy id={id} />
        </TabPanel>
        <TabPanel>
          <Grid>
            <Tabs className={styles.tabsContainer}>
              <TabList>
                <Tab>
                  <AiOutlineMenu />
                </Tab>
                <Tab>
                  <BsGrid3X3GapFill />
                </Tab>
              </TabList>

              <TabPanel>
                <ListCandidates id={id} />
              </TabPanel>
              <TabPanel>
                <GridVacancy id={id} />
              </TabPanel>
            </Tabs>
          </Grid>
        </TabPanel>
      </Tabs>

      <FooterAdmin />
    </>
  )
}

export default DetailVacancy
