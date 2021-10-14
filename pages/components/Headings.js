import React from "react"
import styles from "/styles/Home.module.css"

export default function Headings({ text }) {
  return <h1 className={styles.section_heading}>{text}</h1>
}
