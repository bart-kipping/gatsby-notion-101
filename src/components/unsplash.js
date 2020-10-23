import React from "react"

export default function Unsplash({ resolution }) {
  const res = resolution ? resolution : "1280x720"
  return (
    <div>
      <img
        width="100%"
        src={`https://source.unsplash.com/random/${res}`}
        alt="random picture"
      ></img>
    </div>
  )
}
