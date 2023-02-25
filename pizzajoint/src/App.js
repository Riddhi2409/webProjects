import React from "react"
import { useLocation } from "react-router-dom";
import {Route , Routes} from "react-router-dom"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import Header from "./components/Header";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Backdrop from "./components/Backdrop";

const App = () => {
    const [pizza, setPizza] = useState({ base: "", toppings: [] });
    const [showModal,setShowModal] = useState(false);
    const location = useLocation();

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addToppings = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

    return (
        <div className={`h-screen overflow-y-hidden overflow-x-hidden ${showModal && "bg-[#101128] text-[#414141] "}`}>
            <Header />
            <Backdrop showModal={showModal} />
            <AnimatePresence mode="wait" onExitComplete={()=>setShowModal(false)}>
              <Routes location={location} key={location.key} >
                  <Route path="/*"  element={<Home setPizza={setPizza}/>} />
                  <Route path="base" element={<Base addBase={addBase} pizza={pizza}/>} />
                  <Route path="toppings" element={<Toppings pizza={pizza} addToppings={addToppings}/>} />
                  <Route path="order" element={<Order pizza={pizza} setShowModal={setShowModal}/>} />
              </Routes>
            </AnimatePresence>
        </div>
    )

}

export default App;