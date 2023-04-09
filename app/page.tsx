'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import { GiPunchBlast, GiSpockHand, GiSwordClash } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const GamePage = () => {
  const [selectedGame, setSelectedGame] = useState<"basic" | "extended">("basic");

  const handleGameChange = (game: "basic" | "extended") => {
    setSelectedGame(game);
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-gray-200 p-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8">Piedra, Papel y Tijeras</h1>
      <div className="w-full max-w-5xl h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className={`p-8 bg-white rounded-lg shadow-lg ${
            selectedGame === "basic" ? "border-2 border-blue-500" : ""
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleGameChange("basic")}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <GiPunchBlast size={48} className="text-blue-500 mr-2" />
            <GiSwordClash size={48} className="text-blue-500 mr-2" />
            <GiSpockHand size={48} className="text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Juego Básico</h2>
          <p className="text-gray-700 mb-4">
            ¡Juega al clásico juego de piedra, papel o tijeras! Elige tu arma y descubre si eres el ganador. ¡Diviértete! 😄
          </p>
          <Link href="/game">
            <div
              className={`rounded-full px-6 py-2 font-bold text-lg outline-none transition-colors duration-300 ${
                selectedGame === "basic"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              role="button"
            >
              Jugar <MdKeyboardArrowRight className="inline-block ml-2" />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className={`p-8 bg-white rounded-lg shadow-lg ${
            selectedGame === "extended" ? "border-2 border-red-500" : ""
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleGameChange("extended")}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaGamepad size={48} className="text-red-500 mr-2" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Juego Extendido</h2>
          <p className="text-gray-700 mb-4">
            ¡Juega al juego de piedra, papel o tijeras con más armas! Ahora puedes elegir entre cinco diferentes armas y
            descubrir si eres el ganador. ¡Diviértete! 😄
          </p>
          <Link href="/">
            <div
              className={`rounded-full px-6 py-2 font-bold text-lg outline-none transition-colors duration-300 ${
                selectedGame === "extended"
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
              role="button"
            >
              Jugar <MdKeyboardArrowRight className="inline-block ml-2" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GamePage;