import React from "react";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pathVariants = {
    hidden: {
        opacity:0,
        rotate: 180,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

const Header = ({setPizza}) =>{
    return (
        <Link to='/'>
            <div className="flex flex-row gap-2 bb-2  border-b-gray-500 border-2 w-screen">
                <motion.div 
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                >
                <GiFullPizza 
                    className="my-2 mx-3"  size='4rem' 
                    onClick={()=>setPizza({ base: "", toppings: []})} 
                    
                />
                </motion.div>
                <motion.h3 
                className="mt-10 text-xl font-serif	" 
                initial={{position: 'relative' , top: -250}}
                animate={{top: 0}}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                >Pizza Joint</motion.h3>
            </div>
        </Link>
    )
}

export default Header
