import React from "react"
import styles from "/styles/Home.module.css"
import Image from "next/image"

export default function Card() {
  return (
    <div className={styles.about_card}>
      <div className={styles.left_side}>
        <Image src="/avatar.png" alt="Avatar" height={300} width={300} />
      </div>
      <div className={styles.right_side}>
        <h1>Hi, I am Piyush</h1>
        <p> I am a frontend developer, currently learning backend.</p>
        <p>
          Self taught, I started learning web development in 2020, I was bored
          during lockdown.
        </p>
        <p>I also like Speedcubing</p>

        <p>(And no, I am not a wolf. I am a human indeed)</p>
      </div>
    </div>
  )
}
