import React, {useEffect} from 'react'
import styles from "./carousel.module.css";
import CarouselLeftNavigation from "./carouselLeftNavigation";
import CarouselRightNavigation from "./carouselRightNaviagtion";
import { Navigation} from 'swiper/modules'
import {useSwiper, SwiperSlide, Swiper} from "swiper/react";
const Controls=({data})=>{
 const swiper=useSwiper();

 useEffect(()=>{
swiper.slideTo(0, null);
 },[data])

 return (
    <>
    </>
 )
}
const Carousel = ({data, renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper style={{padding:"0px 20px"}} initialSlide={0} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
<Controls data={data}/>
<CarouselLeftNavigation/>
<CarouselRightNavigation/>
{
    data.map((item)=>{
        return <SwiperSlide>{renderComponent(item)}</SwiperSlide>
    })
}
        </Swiper>
    </div>
  )
}

export default Carousel
