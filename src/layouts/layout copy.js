import React from "react"
import { Link } from "gatsby"
import Unsplash from "../components/unsplash"

function ListLink(props) {
  return (
    <li
      style={{
        display: `inline-block`,
        marginRight: `1rem`,
        fontSize: "2.5rem",
        color: "white",
      }}
    >
      <Link style={{ color: "black" }} to={props.to}>
        {props.children}
      </Link>
    </li>
  )
}

export default function layout({ children }) {
  return (
    <div
      style={{
        margin: `-0.5rem -0.5rem`,
        width: "100vw",
        minHeight: "100vh",
        height: "fit-content",
        // maxHeight: "100vh",
        display: "grid",
        gridTemplateRows: "minmax(3em, 18vh) auto 4vh",
        flexDirection: "column",
        overflow: "hidden",
        // background: "url('https://source.unsplash.com/random/1280x720')",
        // backgroundSize: "100vw",
        // position: "fixed",
        fontFamily: "helvetica",
        letterSpacing: "1.5em",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          background: "url('https://source.unsplash.com/random/1280x720')",
          backgroundSize: "100vw",
          zIndex: "-1",
        }}
      ></div>
      <header
        style={{
          boxSizing: "border-box",
          padding: `0rem 5rem`,
          // width: `100vw`,
          display: "flex",
          backgroundColor: "white", // "rgba(0.8,0.1,0.0,0.3)",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
        <h1 style={{ display: "inline" }}>Bart Kipping</h1>
        <ul
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
            float: "flex-end",
            // backgroundColor: "black",
          }}
        >
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <div style={{ padding: "15em" }}>{children}</div>
      <footer
        style={{
          boxSizing: "border-box",

          display: "grid",
          backgroundColor: "white",
          float: "bottom",
          gridRow: "3",
          textAlign: "center",
        }}
      >
        <p
          style={{
            justifySelf: "center",
            alignSelf: "center",
            fontSize: "smaller",
            letterSpacing: " 0.1em",
          }}
        >
          info@bartkipping.nl
        </p>
      </footer>
    </div>
  )
}
