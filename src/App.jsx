import React from 'react'
import {motion} from 'motion/react'
const App = () => {
  return (
    <motion.div 
      drag
      whileDrag={{
        scale:0.8
      }}
      dragConstraints={{
        left:0,
        top:0,
        
      }}
    className='box'
    >
    
      
    </motion.div>
  )
}

export default App
