import React from "react";
import {motion,useCycle} from "framer-motion"

const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
            repeat: Infinity,
            repeatType: 'reverse',
          duration: 0.5,
        },
        y: {
            repeat: Infinity,
            repeatType: 'reverse',
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    },
    animationTwo: {
      y: [0, -40],
      x: 0,
      transition: {
        y: {
            repeat: Infinity,
            repeatType: 'reverse',
          
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  };

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
    return (
        <>
        <motion.div 
            className="bg-slate-600 mt-20 p-2 w-3 rounded-full"
            variants={loaderVariants}
            animate={animation}
        >
        </motion.div>
         <motion.div onTap={() => cycleAnimation() } className="cursor-pointer hover:text-lg">Change Loader</motion.div>
         </>
    )
}

export default Loader