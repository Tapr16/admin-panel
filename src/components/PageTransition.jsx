/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0,   x: 80,  scale: 0.95 },
  animate: { opacity: 1,   x: 0,   scale: 1    },
  exit:    { opacity: 0,   x: -80, scale: 0.95 },
}

function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition