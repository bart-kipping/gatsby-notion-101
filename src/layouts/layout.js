import React from "react"

import "./layout.scss"

import Header from "../components/header"
import Unsplash from "../components/unsplash"

const background = {
  img: {
    background: `url("https://source.unsplash.com/random/1920x1080")`,
    backgroundSize: "cover",
  },
  color: {
    background: "lightcoral",
    backgroundSize: "cover",
  },
}

export default function layout({ children, loc, bg }) {
  return (
    <div
      className="layout"
      style={bg === "img" ? background.img : background.color}
    >
      <Header loc={loc}>JOOOO</Header>
      <div className="content">{children}</div>
      <footer>footer</footer>
    </div>
  )
}
