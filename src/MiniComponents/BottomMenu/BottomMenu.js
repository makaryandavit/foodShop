import React from 'react'
import style from "./bottomMenu.module.css";
import { Link } from 'react-router-dom';


import Homee from "../../assets/home.svg"
import Menu from "../../assets/lists.svg"
import About from "../../assets/about.svg"
import User from "../../assets/people.svg"

const BottomMenu = ({active}) => {

    const links = [
        {
            id: Math.random() * Math.random(),
            icon: Homee,
            path: 'home',
            active: true,
        },
        {
            id: Math.random() * Math.random(),
            icon: Menu,
            path: 'menu',
            active: false,
        },
        {
            id: Math.random() * Math.random(),
            icon: About,
            path: 'about',
            active: false,
        },
        {
            id: Math.random() * Math.random(),
            icon: User,
            path: 'login',
            active: false,    
        }
    ]
  return (
    <div className={style.bottomLine}>
            <ul>
                {
                    links.map((item,index) => (
                        <li key={item.id}  className={index == active ? `${style.active}` : `${style.noActive}`}>
                            <Link to={`/${item.path}`}>
                                <img src={item.icon} className={style.icons} alt="" />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}

export  {BottomMenu}
