import React from 'react'
import style from "./start.module.css";

import Burgers from "../../assets/burgers.png";
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className={style.section}>
        <p className={style.title}>FoodPal</p>
        <img src={Burgers} className={style.burgers} alt="" />
        <p className={style.text}>Food and grocery delivery <br/> from restaurants and stores</p>
        <button className={style.btn}>
          <Link to="/login" className={style.link}>Start using</Link>
        </button>
    </div>
  )
}

export  {Start}
