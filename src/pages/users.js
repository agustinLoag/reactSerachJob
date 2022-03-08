import React from "react"
import LayoutProtected from "../layouts/LayoutProtected"
import BannerVacancy from "../components/vacancies/BannerVacancy"

const Users = () => {
  return (
    <LayoutProtected>
      <BannerVacancy />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fugiat temporibus animi, nemo asperiores adipisci dignissimos soluta
          ipsam sed quidem ex modi dicta molestias, dolorum veritatis
          doloremque, repellendus expedita reprehenderit.
        </p>
      </div>
    </LayoutProtected>
  )
}

export default Users
