import React, { useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import ListLink from "./listLink"

import "./header.module.scss"

export default function Header(props) {
  let { scrollYProgress } = useViewportScroll()
  let scale = useTransform(
    scrollYProgress,
    //[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3],
    [0, 0.01, 0.2, 0.3, 0.4, 0.5, 0.6],
    [5, 4.75, 4, 3, 2, 1.25, 1]
  )
  const [vari, setvari] = useState(5)
  scrollYProgress.onChange(x => {
    // console.log(scale.get())
    setvari(scale.get())
  })

  return (
    <motion.header
      // style={{ padding: `${scale.current}rem` }}
      initial={{ padding: "5em" }}
      animate={{ padding: vari < 4.8 ? "1em" : "5em" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <h1>Bart Kipping</h1>
      <ul>
        <ListLink to="/" pageName="Home"></ListLink>
        <ListLink to="/about" pageName="About"></ListLink>
        <ListLink to="/contact" pageName="Contact"></ListLink>
        <ListLink to="/blog" pageName="Blog"></ListLink>
      </ul>
    </motion.header>
  )
}
