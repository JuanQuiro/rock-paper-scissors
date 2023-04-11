import React from "react";
import { motion } from "framer-motion";
import rockPaperScissorsStore from '../store/useRockPaperScissorsStore';


const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Modal = ({ isOpen, onClose, results }:any) => {
      const {
    playerChoice,
    machineChoice,
    clicks,
    setPlayerChoice,
    setClicks,
    rounds,
    currentRound,
    setCurrentRound,
    setRounds,
    mode,
    score,
    getResult,
    winner
  } = rockPaperScissorsStore((state) => ({
    playerChoice: state.playerChoice,
    machineChoice: state.machineChoice,
    clicks: state.clicks,
    setPlayerChoice: state.setPlayerChoice,
    setClicks: state.setClicks,
    rounds: state.rounds,
    currentRound: state.currentRound,
    setCurrentRound: state.setCurrentRound,
    setRounds: state.setRounds,
    mode: state.mode,
    score: state.score,
    getResult: state.getResult,
    winner: state.winner,
  }),);
    console.log(rounds);
    
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 w-full h-full z-50 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto p-4"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3">
                          <p className="text-xl text-black font-bold">Ronda { rounds.length}</p>
              <div className="cursor-pointer z-50" onClick={onClose}>
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                  />
                </svg>
              </div>
                      </div>
             <p className=" text-gray-50">
            El Humano eligió = {playerChoice}
            <br/>
                          La Máquina eligió = {machineChoice}
                          <br />
                          Este es el modo = {mode}
                          <br />
                          El resultado es = {results}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal; 