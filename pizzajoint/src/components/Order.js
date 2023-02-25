import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { 
            type: 'spring', 
            delay: 0.5 ,
            damping: 8,
            staggerChildren: 0.4,
            when: "beforeChildren"
        }
    
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
      }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const Order = ({pizza,setShowModal}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowModal(true);
        }, 5800);
        return () => clearTimeout(timer);
      }, [setShowModal]);
    return (
        <motion.div 
            className="flex flex-col justify-center items-center sm:my-[15rem] my-[10rem]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="sm:text-5xl text-2xl  mb-8">Thank you for your order {`:)`}</h1>
            <motion.h4 
                className="mb-2 sm:text-xl text-lg"
                variants={childVariants}
            >
                You ordered a {pizza.base} pizza with:</motion.h4>
            {(pizza.toppings).map(tops=>{
                        return (
                        <motion.h4 className="mb-1" 
                        key={tops}
                        variants={childVariants}>{tops}</motion.h4>
                        )
            })}
        </motion.div>
    )
}

export default Order;