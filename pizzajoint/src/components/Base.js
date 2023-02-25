import React from "react";
import { TiChevronRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 0.5 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
      }
}

const nextVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    }
}

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

const Base = ({addBase, pizza}) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
    return (

        <motion.div 
            className="flex flex-col  mx-auto sm:my-[15rem] my-[10rem] text-left  w-fit text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-lg border-b-gray-400 border-2 mb-4">Step 1: Choose Your Base</h1>
            {bases.map((bas)=>{
                    return(
                        
                        <div className="flex flex-row gap-1 items-center " key={bas}>
                            {pizza.base=== bas ? <TiChevronRight /> : ""}
                            <motion.h4
                                className="cursor-pointer mb-2 w-fit"  
                                onClick={()=>{addBase(bas)}}
                                whileHover={{ scale: 1.3, originX: 0, color: '#0D5A5A' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >{bas}</motion.h4>
                        </div>
                    )

            })}
            {pizza.base &&
            <Link to='/toppings'>
                <motion.div
                    variants={nextVariants}
                >
                <motion.button 
                className="sm:text-xl text-lg border-gray-500 border-2 rounded-full mt-8 w-[5rem] p-2"
                    variants={buttonVariants}
                    whileHover="hover"
                >Next</motion.button>
                </motion.div>
            </Link>
            }
        </motion.div>
    )
}

export default Base;