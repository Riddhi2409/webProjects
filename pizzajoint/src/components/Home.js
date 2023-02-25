import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Loader from "./Loader";

const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
      transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };

const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow:"15px 20px 8px  rgb(0,0,0,0.4)",
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  }

const Home = () => {

    return (
        <motion.div 
        className="flex justify-center items-center sm:my-[15rem] my-[10rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="sm:text-5xl text-2xl font-serif">Welcome to Pizza Joint</h1>
                    <Link to="/base">
                        <motion.button 
                            className="sm:text-xl text-lg border-gray-500 border-2 p-3 rounded-full mt-8"
                            variants={buttonVariants}
                            whileHover="hover"
                        >Create Your Pizza
                        </motion.button>
                    </Link>
                    <Loader />
                </div>
        </motion.div>
    )
}

export default Home