import React from "react"
import Navbar from "./components/Nav"
import Headings from "./components/Headings"
import Project from "./components/Project"

export default function projects() {
  return (
    <>
      <title>Projects</title>
      <Navbar />
      <Headings text="Check out a few projects" />

      <div className="project_grid">
        <Project
          link="https://cutedoggo.netlify.app/"
          title="CuteDoggo"
          image="/projects/cutedoggo.jpg"
          desc="A website that shows cute doggo"
          alt="cutedoggo image"
        />
        <Project
          link="https://yearcount.netlify.app"
          title="Product Countdown"
          image="/projects/yearcount.jpg"
          desc="A countdown for product or startup. Made with JavaScript"
          alt="product count down"
        />
      </div>
    </>
  )
}
