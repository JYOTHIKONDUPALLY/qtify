import React, {useState, useEffect} from 'react'
import styles from "./carousel.module.css"
import {useSwiper} from "swiper/react";
import LeftArrow from "../../assests/left nav.png";
const CarouselLeftNavigation = () => {
    const swiper=useSwiper();
const [isBeginning, setIsBeginning]=useState(swiper.isBeginnning);

useEffect(()=>{
swiper.on("slideChange", function(){
    setIsBeginning(swiper.isBeginning);
})
},[])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
        </div>
  )
}

export default CarouselLeftNavigation