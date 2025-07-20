import React from 'react'
import {motion} from 'motion/react'
const App = () => {
  return (
    <motion.div 
    whileHover={{
      background:'yellow'
    }} 
    whileTap={{
      scale:0.9
    }} className='box'
    >
    
      
    </motion.div>
  )
}

export default App
