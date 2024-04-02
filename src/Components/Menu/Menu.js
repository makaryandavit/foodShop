import React from 'react'
import style from "./menu.module.css";
import { BottomMenu, SearchBar } from '../../MiniComponents';

import Burger from "../../assets/burger.png"
import HodDog from "../../assets/hotDog.png"
import Fries from "../../assets/fries.png"
import Popocorn from "../../assets/popcorn.png"
import { Link } from 'react-router-dom';

const Menu = () => {

  const foodInfo = [
    {
        id: Math.random() * Math.random(),
        img: Burger,
        text: 'Classic Cheese Burger',
        price: '$4.50',
        to: '/burger'
    },
    {
        id: Math.random() * Math.random(),
        img: HodDog,
        text: 'Grandpa’s Hot Dog',
        price: '$3.20',
        to: '/hotDog'
    },
    {
        id: Math.random() * Math.random(),
        img: Fries,
        text: 'Very French Fries',
        price: '$2',
        to: '/fri'
    },
    {
        id: Math.random() * Math.random(),
        img: Popocorn,
        text: 'Unicorn Popcorn',
        price: '$4',
        to: '/popcorn'
    },
    {
        id: Math.random() * Math.random(),
        img: Burger,
        text: 'Classic Cheese Burger',
        price: '$4.50',
        to: '/burger'
    },
    {
        id: Math.random() * Math.random(),
        img: Fries,
        text: 'Very French Fries',
        price: '$2',
        to: '/fri'
    },
    {
      id: Math.random() * Math.random(),
      img: Popocorn,
      text: 'Unicorn Popcorn',
      price: '$4',
      to: '/popcorn'
    },
    {
        id: Math.random() * Math.random(),
        img: HodDog,
        text: `Grandpa's Hot'Dog`,
        price: '$3.20',
        to: '/hotDog'
    },
]

  return (
    <div className={style.section}>
      <SearchBar />
      <div className={style.foodSection}>
        <p className={style.title}>Fast food</p>
        <div className={style.foods}>
          {
            foodInfo.map(item => (
                <Link to={`${item.to}`} key={item.id * Math.random()}>
                    <div className={style.food} key={item.id}>
                  <div className={style.foodTop}>
                    <img src={item.img} className={style.foodNkar} alt="" />
                    <p className={style.foodPrice}>{item.price}</p>
                  </div>
                  <div className={style.foodBottom}>
                    <p className={style.foodText}>{item.text}</p>
                  </div>
                </div>
                </Link>
            ))
          }
        </div>
      </div>
      <BottomMenu active={1} />
    </div>
  )
}

export  {Menu}
