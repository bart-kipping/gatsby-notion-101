import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
export default function Motion() {
  const [show, setShow] = useState(true)

  //   setTimeout(() => {
  //     console.log("show off")
  //     setShow(false)
  //   }, 2000)

  return (
    <div>
      <AnimatePresence>
        {show && (
          <motion.h2 onClick={() => setShow(false)} exit={{ y: 500 }}>
            JOOOOOO
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  )
}
