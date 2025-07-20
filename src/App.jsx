import React from 'react'
import { motion } from 'framer-motion'
const App = () => {

  return (
    <div>
      <motion.div className='box ' animate={{
        x: 1000,
        rotate: 360,
        animationDelay: 3,

      }}
       transition={{
        duration: 3,
        delay: 1,
        
      }} 
       >


      </motion.div>
    </div>
  )
}

export default App
