import React from 'react'
import style from "./error.module.css";

import Nkar1 from "../../assets/burger.png"
import Nkar2 from "../../assets/fries.png"
import Nkar3 from "../../assets/popcorn.png"
import Nkar4 from "../../assets/hotDog.png"

const Error = () => {
  return (
    <div className={style.section}>
      <p className={style.title}>404</p>
      <img src={Nkar1} className={style.nkar1} alt="" />
      <img src={Nkar2} className={style.nkar2} alt="" />
      <img src={Nkar3} className={style.nkar3} alt="" />
      <img src={Nkar4} className={style.nkar4} alt="" />
      <img src={Nkar4} className={style.nkar5} alt="" />
      <img src={Nkar3} className={style.nkar6} alt="" />
      <img src={Nkar2} className={style.nkar7} alt="" />
    </div>
  )
}

export  {Error}
