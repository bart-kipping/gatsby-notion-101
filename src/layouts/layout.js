import React from "react"

import "./layout.scss"

import Header from "../components/header"

export default function layout({ children, loc }) {
  return (
    <div className="layout">
      <Header loc={loc}>JOOOO</Header>
      <div className="content">{children}</div>
      <footer>footer</footer>
    </div>
  )
}
