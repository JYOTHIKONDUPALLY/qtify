import React from 'react'
import Button from "../button/button";
import styles from "./navbar.module.css";
import Logo from "../logo/logo";
import Searchbar from "../searchbar/searchbar";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <Searchbar/>
      <Button children="Give Feedback"/>
    </nav>
  )
}
