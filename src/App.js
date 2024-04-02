import { useState } from "react";
import { About, Basket, Error, Home, Login, Menu, Start } from "./Components";
import "./global.css"
import { Route, Router, Routes } from "react-router";

function App() {
  if(window.innerWidth > 500){
    return (
      <Error />
    )
  }else{
    return (
      <Routes>
        <Route index element={<Start />}/>
        <Route path="login" element={<Login />}/>
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path=":basket" element={<Basket />} />
        <Route path="about" element={<About />} />
      </Routes>
    )
  }
}

export default App;
