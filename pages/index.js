import styles from "../styles/Home.module.css"
import Nav from "./components/Nav"
import Card from "./components/Card"
import Link from "next/link"
import Divider from "./components/Divider"
import Heading from "./components/Headings"
import Footer from "./components/Footer"
import Meta from "./components/Meta"
import Head from "next/head"

export default function Home() {
  console.log(
    "%cThe colors ✨",
    "color: #d8097e; font-weight: bold; font-size: 1rem;"
  )
  return (
    <>
      <Head>
        <title>Piyush Panchal</title>
        <Meta />
      </Head>
      <Nav />
      <section className={`${styles.about_sect} sect`}>
        <Card />
        <Link href={"#second-section"}>
          <button className={styles.scroll_btn}>More about me</button>
        </Link>
      </section>
      <Divider />
      <section
        className={`h-45 sect ${styles.second_sect}`}
        id="second-section"
      >
        <Heading text="About Me" />
        <p>
          Hi, I am Piyush, I found my passion in tech, in 2020 during the
          lockdown. Starting directly with JavaScript 😅 (Not a good option)
        </p>

        <p>
          I slowly learnt basics of web development, including HTML, CSS and
          JavaScript. I have a big passion for NextJS too.
        </p>
        <p>
          I also do open-source projects, My contributions and work are on my
          GitHub :)
        </p>
      </section>
      <Divider />
      <section className={`${styles.third_sect} h-45`}>
        <Heading text="Contact" />
        <p>
          I would love to talk! Feel free to reach out to me on{" "}
          <Link href="mailto:panchalp008@gmail.com">Mail</Link> or check my work{" "}
          on my <Link href="https://github.com/programmer005">Github</Link> , or
          check out my{" "}
          <Link href="https://twitter.com/piyushpanchal_">Twitter</Link>. I also
          have a <Link href="https://techwithpiyush.vercel.app">blog</Link>.
        </p>
      </section>
      <Footer />
    </>
  )
}
