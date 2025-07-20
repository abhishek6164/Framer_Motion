import React from 'react'
import { motion } from 'framer-motion'
const App = () => {

  return (

    <div className="scroll-container">
      <motion.div
        className="scroll-text"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        Abhishek Radhakishan Pipariye &nbsp; 🚀&nbsp; Abhishek Radhakishan Pipariye &nbsp; 🚀&nbsp; {/* repeat for infinite feel */}
      </motion.div>
    </div>
  )
}

export default App
