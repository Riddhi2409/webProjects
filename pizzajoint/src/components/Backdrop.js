import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

const modal = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const backdrop = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y:0, 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow:"15px 20px 8px  rgb(0,0,0,0.4)",
      transition: {
        duration: 0.3,
      }
    }
  }
const Backdrop = ({showModal}) => {
    return (
        <AnimatePresence>
            {showModal && (
                    <motion.div 
                        className="ml-[37rem] w-[25rem] bg-white mt-[15rem] fixed z-10 font-serif rounded-2xl text-gray-500 text-xl"
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div 
                            className=" flex flex-col justify-center items-center z-10"
                            variants={modal}
                        >
                            <p className="pt-[3rem] mb-[2rem]">Want to make another Pizza?</p>
                            <Link to="/">
                                <motion.button 
                                    className="rounded-full border-2 border-slate-600 px-2 py-2 mb-6 text-lg"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    >Start Again</motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Backdrop;