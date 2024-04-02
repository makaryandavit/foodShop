import React from 'react'
import style from "./about.module.css";
import { BottomMenu } from "../../MiniComponents"

import OrderStart from "../../assets/orderStart.svg"
import OrderKitchen from "../../assets/orderKitchen.svg"
import OrderBus from "../../assets/orderCar.svg"
import OrderEnd from "../../assets/orderEnd.svg"

const About = () => {
  return (
    <div className={style.section}>
        <div className={style.inside}>
            <p className={style.title}>About Us</p>
            <p className={style.text}>Whether it's a quick bite on the go or a satisfying meal at home, our Cheeseburger is a timeless choice that never disappoints. Ingredients
            Beef patty, Burger bun, Cheese, Lettuce, Tomatoes, Onion rings, Ketchup, Mustard, Mayonnaise.Whether it's a quick bite on the go or a satisfying meal at home, our Cheeseburger is a timeless choice that never disappoints. Beef patty, Burger bun, Cheese, Lettuce, Tomatoes, Onion rings, Ketchup, Mustard, Mayonnaise.</p>
            <p className={style.title}>We have delivery</p>
            <div className={style.box}>
                <p className={style.boxText}>We will receive the delivery in 10-30 minutes</p>
                <p className={style.boxText}>You will receive the delivery at your address</p>
                <div className={style.line}>
                    <img src={OrderStart} className={style.icon} alt="" />
                    <img src={OrderKitchen} className={style.icon} alt="" />
                    <img src={OrderBus} className={style.icon} alt="" />
                    <img src={OrderEnd} className={style.icon} alt="" />
                </div>
            </div>
        </div>
        <BottomMenu active={2} />
    </div>
  )
}

export  {About}
