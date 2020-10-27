import React from "react"

import "./layout.scss"

import Header from "../components/header"

export default function layout({ children }) {
  return (
    <div className="layout" layout>
      <Header>JOOOO</Header>
      <div className="content">{children}</div>
      <footer>footer</footer>
    </div>
  )
}
