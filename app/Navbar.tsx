'use client'
import React from "react";
import Image from "next/image";
import logo from './logo.svg'
import { useOpcionesStore } from './store/opcionesStore'
import { motion } from "framer-motion"


export const Navbar = () => {
  const values = useOpcionesStore((state) => state.numero)
  return (
    <section className="flex justify-center">
      <div className="grid shadow-lg transition duration-500 hover:bg-black cursor-default grid-cols-2 btn w-2/4 p-7 rounded-2xl h-auto bg-transparent my-7 border-[3px] normal-case border-[#5F6D88]">
        <Image
          src={logo}
          alt="It is the name of the game"
          
          priority
        />
        <div className="flex  justify-end">
          <motion.div
          animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "10%"],
        }}
            className="py-4 px-7 transition duration-500 hover:bg-yellow-200  rounded-lg shadow-xl bg-[#F8F8F8]">
            <div
              className="text-lg font-bold text-center  uppercase tracking-wide text-[#3347AC]/95">
              score
            </div>
            <p className="text-5xl font-black text-center text-[#58566A]">{values}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
