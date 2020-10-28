import React, { useState, useEffect } from "react"
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
  useCycle,
} from "framer-motion"
import { Link } from "gatsby"

const variants = {
  open: { opacity: "100%", height: 2, width: "100%" },
  closed: { opacity: "0%", height: 2, width: "0%" },
}
const history = [""]
export default function ListLink({ pageName, to, data, loc, prev }, props) {
  let loca = loc.pathname
  const [refresh, setrefresh] = useState()
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

  const [isOpen, setIsOpen] = useState(
    loca === "/" && pageName === "Home"
      ? true
      : loca == `/${pageName.toLowerCase()}`
      ? true
      : false
  )
  // const [show, setshow] = useState(
  //   isOpen || (pageName.toLowerCase() === history[0] && true)
  // )

  function checkHome() {
    return (
      (pageName === "Home" && loca === "/") ||
      (pageName === "Home" && history[0] === "/")
    )
  }
  useEffect(() => {
    isOpen && history.splice(0, 1, loca)
  }, [])
  return (
    <li>
      <Link
        style={{
          // backgroundColor: "white",
          color: "black",
          display: "grid",
          height: "1em",
        }}
        to={to}
      >
        <p style={{ gridRow: 1, gridColumn: 1, margin: "0px", color: "black" }}>
          {pageName}
        </p>
        {/* <p>previous path is: {history}</p> */}
        {console.log(`${history[0]} : ${loca}`)}
        {/* {console.log(`/${pageName.toLowerCase()}` === history[0])} */}
        {console.log(checkHome())}
        {(`/${pageName.toLowerCase()}` === history[0] ||
          isOpen ||
          checkHome()) && (
          <motion.div
            initial={isOpen ? "closed" : "open"}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{
              delay: 0.5,
              type: "spring",
              // repeat: "3",
              // repeatType: "mirror",
              stiffness: 2000,
              damping: 150,
            }}
            style={{
              justifySelf:
                `/${pageName.toLowerCase()}` === history[0] ? "right" : "left",
              backgroundColor: "black",
              transformOrigin: "center",
            }}
          ></motion.div>
        )}

        {/* )} */}
        {/* </AnimatePresence> */}
      </Link>
    </li>
  )
}

// useEffect(() => {
//   // console.log(loca)
//   // active ? cycleX(0) : cycleX(1)
//   // active ? cycleY(0) : cycleY(1)
//   // loca === "/" && pageName === "Home" && setactive(true)
//   loca === `/${pageName.toLowerCase()}` ? setactive(true) : setactive(false)
//   // loca === "/" && pageName === "Home"
//   //   ? setactive(true)
//   //   : loca == `/${pageName.toLowerCase()}`
//   //   ? setactive(true)
//   //   : setactive(false)
//   console.log(`${pageName} ${active}`)
// }, [active])

{
  /* <AnimatePresence>
{active && (
  <motion.div
    // initial={{
    //   // width: "100%",
    //   // backgroundColor: "#ffffff",
    //   // height: "3px",
    //   opacity: "1",
    // }}
    // exit={{ y: 500 }}
    // animate={{
    //   height: active ? `${x}px` : `${x}px`,
    //   // width: active ? `${vari}%` : "0%",
    //   // backgroundColor: active ? "#000000" : "#ffffff",
    // }}
    // // exit={{ width: "0" }}
    // transition={{
    //   // delay: 0.3,
    //   type: "spring",
    //   //   repeat: "1",
    //   //   repeatType: "mirror",
    //   stiffness: 260,
    //   damping: 150,
    // }}
    style={{
      gridRow: 1,
      gridColumn: 1,
      backgroundColor: "white",
      width: "100%",
      height: "5px",
      alignSelf: "flex-end",
    }}
  ></motion.div>
)}
</AnimatePresence>  */
}
