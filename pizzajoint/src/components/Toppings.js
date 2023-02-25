import React from "react"
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


const Toppings = ({pizza,addToppings}) => {
    const toppings = ["mushrooms","peppers","extra cheese","capsicum","Tomatoes","Onions","Olives"]
    return (
        <motion.div 
            className="flex flex-col  mx-auto sm:my-[10rem] my-[5rem] text-left  w-fit text-left font-serif"
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
            exit="exit" 
        >
        <h1 className="text-lg border-b-gray-400 border-2 mb-4">Step 2: Choose Toppings</h1>
        {toppings.map((bas)=>{
                    return(
                        
                        <div 
                            className="flex flex-row gap-1 items-center " 
                            key={bas}
                        >
                            {pizza.toppings.includes(bas) ? <TiChevronRight /> : ""}
                            <motion.h4 className="cursor-pointer mb-3 w-fit"  
                            onClick={()=>{addToppings(bas)}}
                            whileHover={{ scale: 1.3, originX: 0, color: '#0D5A5A' }}
                            transition={{ type: 'spring', stiffness: 300 }}>{bas}</motion.h4>
                        </div>
                    )

            })}
            <Link to="/order">
                <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
                >
                    <motion.button 
                        className="sm:text-xl text-lg border-gray-500 border-2 rounded-full mt-8 w-[5rem] p-2"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Order
                    </motion.button>
                </motion.div>
            </Link>
        
    </motion.div>
    )
}

export default Toppings;