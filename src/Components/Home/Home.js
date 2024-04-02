import React, { useRef } from 'react'
import style from "./home.module.css";

import BurgerBottle from "../../assets/burgerBottle.png"
import Cup from "../../assets/cup.svg"
import More from "../../assets/more.svg"
import Hamburger from "../../assets/hamburger.svg"
import Porridge from "../../assets/porridge.svg"

import BurgerOne from "../../assets/burgerOne.png"
import Supper from "../../assets/supper.png"


import { Link } from 'react-router-dom';
import { SearchBar } from '../../MiniComponents/SearchBar';
import { BottomMenu } from '../../MiniComponents/BottomMenu/BottomMenu';

const Home = () => {

    const search = useRef(null);

  const boxesInfo = [
    {
        id: Math.random() * Math.random(),
        img: Hamburger,
        text: 'Fast food',
    },
    {
        id: Math.random() * Math.random(),
        img: Porridge,
        text: 'Breakfast',
    },
    {
        id: Math.random() * Math.random(),
        img: Cup,
        text: 'Drinks',
    },
    {
        id: Math.random() * Math.random(),
        img: More,
        text: 'See all',
    },
  ]

  const foodInfo = [
    {
        id: Math.random() * Math.random(),
        img: BurgerOne,
        text: 'Classic Cheese Burger',
        price: '$4.50',
    },
    {
        id: Math.random() * Math.random(),
        img: Supper,
        text: 'Champions Breakfast',
        price: '$3.80',
    },
    {
        id: Math.random() * Math.random(),
        img: BurgerOne,
        text: 'Classic Cheese Burger',
        price: '$4.50',
    },
    {
        id: Math.random() * Math.random(),
        img: Supper,
        text: 'Champions Breakfast',
        price: '$3.80',
    },
    {
        id: Math.random() * Math.random(),
        img: BurgerOne,
        text: 'Classic Cheese Burger',
        price: '$4.50',
    },
    {
        id: Math.random() * Math.random(),
        img: Supper,
        text: 'Champions Breakfast',
        price: '$3.80',
    },
]



  return (
    <div className={style.section}>
        <SearchBar /> 
        <div className={style.burgerBox}>
            <div className={style.leftPart}>
                <p className={style.text1}>today’s special</p>
                <p className={style.title}>Burger, Fries <br/> & Cola</p>
                <p className={style.price}>$7.50</p>
            </div>
            <div className={style.rightPart}>
                <img src={BurgerBottle} className={style.burger} alt="" />
            </div>
        </div>
        <div className={style.categories}>
            <p className={style.categoryTitle}>Popular categories</p>
            <div className={style.boxes}>
                {
                    boxesInfo.map(item => (
                        <div className={style.box} key={item.id}>
                            <img src={item.img} className={style.boxImg} alt="" />
                            <p className={style.boxText}>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={style.bestFoods}>
            {
                foodInfo.map(item => (
                    <div className={style.food} key={item.id}>
                        <div className={style.foodTop}>
                            <img src={item.img} className={style.foodNkar} alt="" />
                            <p className={style.foodPrice}>{item.price}</p>
                        </div>
                        <div className={style.foodBottom}>
                            <p className={style.foodText}>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <BottomMenu active={0} />
    </div>
  )
}

export  {Home}
