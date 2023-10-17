import React from 'react';
import Styles from "./card.module.css";
import {Chip, Tooltip} from "@mui/material";
const Card = ({data, type}) => {
    const getCard=(type)=>{
        switch(type){
            case"album":{
                const {image, follows, title, songs}=data;
                return(
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                    <div className={Styles.wrapper}>
                        <div className={Styles.card}>
                        <img src={image} alt="album"/>
                        <div className={Styles.banner}>
                           <Chip label={`${follows}Follows`}
                           size="small" className={Styles.chip}/> 

                        </div>
                        </div>
                    
                    <div className={Styles.titleWrapper}>
                        <p>{title}</p>
                    </div>
                    </div>
                    </Tooltip>
                )
            }
            default :return <></>;
        }
      
    }
  return getCard(type);
  
}

export default Card;