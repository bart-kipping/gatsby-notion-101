import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Unsplash from "../components/unsplash"

export default function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Header text="Bart Kipping" />
      <p>
        I design and develop art installations and web experiences for brands,
        theater, musicians and public spaces
      </p>
      <Unsplash></Unsplash>
    </div>
  )
}
