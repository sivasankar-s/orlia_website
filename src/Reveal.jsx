import React, { Children, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Reveal = ({children, width='fit-content'}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref}>
        <motion.div 
        variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: -50}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 0.75, delay: 0.25}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal