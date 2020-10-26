import React from "react"

export default function Unsplash({ resolution, alt }) {
  const res = resolution ? resolution : ""
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <img
        width="auto"
        height="auto"
        src={`https://source.unsplash.com/random/${res}`}
        alt={alt ? alt : "random"}
        style={{}}
      ></img>
    </div>
  )
}
