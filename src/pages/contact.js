import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header text="Contact"></Header>
      <p>Send me a message</p>
      <form style={{ width: "50vw" }}>
        <input style={{ padding: "1em" }} placeholder="Kggg kggg.."></input>
      </form>
    </div>
  )
}
