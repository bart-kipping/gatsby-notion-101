import React, { useState, useEffect } from "react"
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion"
import { Link } from "gatsby"
export default function ListLink({ pageName, to, data, loc }) {
  const [active, setactive] = useState(false)

  let loca = loc.pathname

  let { scrollYProgress } = useViewportScroll()
  let scale = useTransform(
    scrollYProgress,
    //[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3],
    [0, 1],
    [10, 100]
  )
  const [vari, setvari] = useState(5)
  scrollYProgress.onChange(x => {
    // console.log(scale.get())
    setvari(scale.get())
  })

  useEffect(() => {
    console.log(loca)
    loca === "/" && pageName === "Home"
      ? setactive(true)
      : loca == `/${pageName.toLowerCase()}`
      ? setactive(true)
      : setactive(false)
  }, [])

  return (
    <li>
      <Link
        style={{
          //   backgroundColor: "white",
          color: "black",
          display: "grid",
          height: "fit-content",
        }}
        to={to}
      >
        <p style={{ gridRow: 1, gridColumn: 1, margin: "0px", color: "black" }}>
          {pageName}
        </p>
        <AnimatePresence>
          {active && (
            <motion.div
              key="modal"
              initial={{ width: "100%", backgroundColor: "#ffffff" }}
              animate={{
                width: active ? `${vari}%` : "0%",
                backgroundColor: active ? "#000000" : "#ffffff",
              }}
              exit={{ width: "0" }}
              transition={{
                // delay: 0.3,
                type: "spring",
                //   repeat: "1",
                //   repeatType: "mirror",
                stiffness: 260,
                damping: 50,
              }}
              style={{
                gridRow: 1,
                gridColumn: 1,
                height: "1px",
                alignSelf: "flex-end",
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </Link>
    </li>
  )
}
