import React from 'react'
import styles from "./button.module.css";
export default function Button({children}) {
  return (
    <div className={styles.btn}>{children}</div>
  )
}
