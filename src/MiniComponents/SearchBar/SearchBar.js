import React, { useRef } from 'react'
import style from "./search.module.css";
import Search from "../../assets/search.svg"


const SearchBar = () => {
  const search = useRef(null);
  return (


    <div className={style.search}>
            <p className={style.logo}>F</p>
            <div className={style.searchDiv}>
                <div className={style.input}>
                    <input type="text" ref={search} />
                    <img src={Search} className={style.searchIcon} alt="" onClick={() => {
                        search.current.value = ''
                    }} />
                </div>
            </div>
        </div>
  )
}

export  {SearchBar}
