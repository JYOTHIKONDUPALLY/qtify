import React from 'react'
import styles from "./search.module.css";
import {ReactComponent as SearchIcon} from "../../assests/Search icon.svg";
const Search = ({placeholder}) => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}/>
        <button className={styles.searchButton}>
          <SearchIcon/>  
        </button>
    </form>
  )
}

export default Search;
