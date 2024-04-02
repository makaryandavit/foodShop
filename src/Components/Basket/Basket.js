import React, { useEffect, useState } from 'react'
import style from "./basket.module.css";
import { useParams } from 'react-router';

import GoodBurger from "../../assets/goodBurger.png"
import HodDog from "../../assets/hotDog.png"
import Fries from "../../assets/fries.png"
import Popocorn from "../../assets/popcorn.png"
import { Link } from 'react-router-dom';

import Back from "../../assets/back.svg";

import Time from "../../assets/time.svg"
import Star from "../../assets/star.svg"
import Comment from "../../assets/comment.svg"
import Car from "../../assets/car.svg"

const Basket = () => {

  const page = useParams();
  const indexes = ['burger','hotDog','fri','popcorn'];
  let foodIndex = indexes.indexOf(page.basket)
  const foods = [
    {
      id: Math.random() * Math.random(),
      img: GoodBurger,
      time: '30 min',
      grade: '5.0',
      comments: '10',
      book: 'Free',
      text: "Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfyWhether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,ing meal at home,Whether it's a quick bite on the go or a satisfying meal at home, our Cheeseburger is a timeless choice that never disappoints. ",
      price: '$4.50',
      title: 'Classic Cheese Burger',
    },
    {
      id: Math.random() * Math.random(),
      img: GoodBurger,
      time: '15 min',
      grade: '4.8',
      comments: '15',
      book: 'Free',
      text: "Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfyWhether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,ing meal at home,Whether it's a quick bite on the go or a satisfying meal at home, our Cheeseburger is a timeless choice that never disappoints.",
      price: '$3.20',
      title: 'Grandpa’s Hot Dog',
    },
    {
      id: Math.random() * Math.random(),
      img: GoodBurger,
      time: '5 min',
      grade: '4',
      comments: '8',
      book: 'Free',
      text: "Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfyWhether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,ing meal at home,Whether it's a quick bite on the go or a satisfying meal at home, our Cheeseburger is a timeless choice that never disappoints. ",
      price: '$2',
      title: 'Very French Fries',
    },
    {
      id: Math.random() * Math.random(),
      img: GoodBurger,
      time: '3 min',
      grade: '4.5',
      comments: '13',
      book: 'Free',
      text: "Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfyWhether it's a quick bite on the go or a satisfying meal at home,Whether it's a quick bite on the go or a satisfying meal at home,ing meal at home,Whether it's a quick bite on the go or a satisfying meal at home, our Cheeseburger is a timeless choice that never disappoints.",
      price: '$4',
      title: 'Unicorn Popcorn',
    },
  ]

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])



  return (
    <div className={style.section}> 
        <div className={style.sectionTop}>
          <p className={style.title}>{foods[foodIndex].title}</p>
          <Link to="/menu">
            <img src={Back} className={style.back} alt="" />
          </Link>
          <img src={foods[foodIndex].img} className={style.img} alt="" />
        </div>
        <div className={style.sectionBottom}>
          <div className={style.info}>
            <ul>
              <li>
                <img src={Time} className={style.icon} alt="" />
                {foods[foodIndex].time}
              </li>
              <li>
                <img src={Star} className={style.icon} alt="" />
                {foods[foodIndex].grade}
              </li>
              <li>
                <img src={Comment} className={style.icon} alt="" />
                {foods[foodIndex].comments}
              </li>
              <li>
                <img src={Car} className={style.icon} alt="" />
                {foods[foodIndex].book}
              </li>
            </ul>
          </div>
          <p className={style.textInfo}>{foods[foodIndex].text}</p>
          <button className={style.btn} >
            Add to cart
            <span className={style.price}>{foods[foodIndex].price}</span>
          </button>
        </div>
    </div>
  )

}

export  {Basket}
