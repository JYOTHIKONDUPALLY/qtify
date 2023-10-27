import React from 'react'
import {useState, useEffect} from "react";
import styles from "./section.module.css";
import { CircularProgress } from '@mui/material';
import Card from '../Card/card';
import Carousel from '../carousel/carousel';
const Section = ({title, data, type}) => {
    const [carouselToggel, setCarouselToggle]=useState(true);
    const handleToggle=()=>{
         setCarouselToggle(!carouselToggel);
    }
  return (
    <div>
    <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggel?"Collapse All":"Show All"}
        </h4>
    </div>
    {data.length===0?(<CircularProgress/>):(
        <div className={styles.cardsWrapper}>
            {
                !carouselToggel?(<div className={styles.wrapper}>
                    {data.map((item)=>{
                        return (<Card data={item} type={type}/>)
                    })}
                    </div>
                    ):(
                       
                        <Carousel data={data} renderComponent={(data)=><Card data={data} type={type}/>}/>
                       
                    )
            }
             </div>
    )}
   
    </div>
  )
}

export default Section;