import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Project({ link, title, desc, image, alt }) {
  return (
    <div className="project_card">
      <Image src={image} height={350} width={600} alt={alt} />
      <a href={link}>
        <h1 className="title-p">{title}</h1>
      </a>
      <p>{desc}</p>
    </div>
  )
}
