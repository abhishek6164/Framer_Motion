import React from 'react'
import { motion } from 'framer-motion'
const App = () => {

  return (

    // <div className="scroll-container">
    //   <motion.div
    //     className="scroll-text"
    //     animate={{ x: ["100%", "-100%"] }}
    //     transition={{
    //       repeat: Infinity,
    //       duration: 10,
    //       ease: "linear",
    //     }}
    //   >
    //     Abhishek Radhakishan Pipariye &nbsp; 🚀&nbsp; Abhishek Radhakishan Pipariye &nbsp; 🚀&nbsp; {/* repeat for infinite feel */}
    //   </motion.div>
    // </div>

    <div>
      <motion.div className="box"
      animate={{
        x:[0,700,500,300,200,1000,250],
        y:[0,0,400,200,110,500,1000]
      }} 
      transition={{duration:4,delay:1}} ></motion.div>
    </div>
  )
}

export default App
