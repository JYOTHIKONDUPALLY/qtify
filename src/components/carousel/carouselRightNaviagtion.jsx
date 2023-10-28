import React, {useState, useEffect} from 'react'
import styles from "./carousel.module.css"
import {useSwiper} from "swiper/react";
import {ReactComponent as RightArrow} from "../../assests/RightArrow.svg";
const CarouseRightNavigation = () => {
    const swiper=useSwiper();
const [isEnd, setIsEnd]=useState(swiper.isEnd);

useEffect(()=>{
swiper.on("slideChange", function(){
    setIsEnd(swiper.isEnd);
})
},[])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
  )
}

export default CarouseRightNavigation