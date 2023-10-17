import React from 'react'
import style from "./hero.module.css";
import headphone from "../../assests/headphone.png"
const Hero = () => {
  return (
    <div className={style.hero}>
        <div>
<h1> 100 Thousands Songs, ad-Free</h1>
<h1>Over thousands podcast episodes</h1>
        </div>
        <div>
<img src={headphone} alt="headphones" width={212}/>
        </div>
    </div>
  )
}

export default Hero;