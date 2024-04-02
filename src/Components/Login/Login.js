import React, { useState } from 'react'
import style from "./login.module.css";

import User from "../../assets/user.png";
import Line from "../../assets/line.svg"
import Google from "../../assets/google.svg"
import Apple from "../../assets/apple.svg"
import Facebook from "../../assets/facebook.svg"
import { Link } from 'react-router-dom';

const Login = () => {

  const [allow, setAllow] = useState(false);

  return (
    <div className={style.section}> 
        <img src={User} className={style.user} alt="User" />
        <div className={style.login}>
            <form action=''>
                <p className={style.title}>Log in with phone</p>
                <input type="tel" placeholder='+5 555 555 555 55' className={style.number} onChange={(phoneNumber) => {
                    phoneNumber.target.value.length >= 6 ? setAllow(true) : setAllow(false)
                }} />
                <Link className={allow ? style.subBtn : `${style.subBtn} ${style.notAllowed}`} to="/home">Log In</Link>
            </form>
        </div>
        <p className={style.or}>
            <img src={Line} className={style.line} alt="Line" />
            or
            <img src={Line} className={style.line} alt="Line" />
        </p>
        <div className={style.alternative}>
            <div className={style.accounts}>
                <Link to="" className={style.link}>
                    <img src={Google} className={style.icon} alt="Icon" />    
                    Continue with Google
                </Link>
            </div>
            <div className={style.accounts}>
                <Link to="" className={style.link}>
                    <img src={Apple} className={style.icon} alt="Icon" />    
                    Continue with Apple
                </Link>
            </div>
            <div className={style.accounts}>
                <Link to="" className={style.link}>
                    <img src={Facebook} className={style.icon} alt="Icon" />    
                    Continue with Facebook
                </Link>
            </div>
        </div>
    </div>
  )
}

export  {Login}
