import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import rockPaperScissorsStore from '../../store/useRockPaperScissorsStore';
import Modal from '../../components/Modal';


//import img
import Triangulo from './svg/Triangulo';
import Mano from './svg/Mano';
import Piedra from './svg/Piedra';
import Tijeras from './svg/Tijeras';
import React from 'react';

type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';




export default function Page(): JSX.Element {
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

  useEffect(() => {
    getResult(machineChoice,playerChoice)
  }, [playerChoice,machineChoice,clicks])
  
  useEffect(() => {
    actualizarPuntajes(playRockPaperScissorsLizardSpock(playerChoice,machineChoice),puntajes)
  }, [playerChoice,machineChoice,clicks])
  


  const savePlayerChoice = (choice: Choice): void => {
    setPlayerChoice(choice);
    setClicks(clicks + 1);
  };

  const addRound = (): void => {
  const round = {
    id: currentRound,
    result: {
      machineChoice,
      playerChoice
    } 
  };
  setRounds([...rounds as any, round as any]);
  setCurrentRound(currentRound + 1);
};

  useEffect(() => {
    if (clicks > 0) {
      addRound();
    }
  }, [clicks]);

  const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
    setModalOpen(!modalOpen);
  };



  return (
    <>
      <div className="bg-[#171D3F] w-screen h-screen">
        <Navbar puntaje={puntajes.humano} />
        <div className="grid justify-center items-center">
          <div className="grid grid-cols-3 gap-4 items-center justify-center">
            <Triangulo width={465} height={250} />

            <div
              onClick={() => {
                savePlayerChoice('paper');
              }}
              className="cursor-pointer z-40 shadow-xl bg-[#5571F3] rounded-full p-3"
            >
              <div className="bg-white rounded-full p-10">
                <div className="box">
                  <Mano />
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                savePlayerChoice('rock');
              }}
              className="cursor-pointer shadow-xl z-40 relative top-52 bg-[#DD3051] rounded-full p-3"
            >
              <div className="bg-white rounded-full p-10">
                <div className="box">
                  <Piedra />
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                savePlayerChoice('scissors');
              }}
              className="cursor-pointer z-40 shadow-xl bg-[#F1C40F] rounded-full p-3"
            >
              <div className="bg-white rounded-full p-10">
                <div className="box">
                  <Tijeras />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="App">
      <button
        className="btn btn-primary bg-black"
        onClick={toggleModal}
      >
        Ver rondas
      </button>
      <Modal isOpen={modalOpen} onClose={toggleModal} results={playRockPaperScissorsLizardSpock(playerChoice,machineChoice)}  />
      </div>
      </div>
      
      
    </>
  );
}


function playRockPaperScissorsLizardSpock(player1: Choice, player2: Choice): string {
  if (player1 === player2) {
    return "¡Es un empate!";
  } else if (
    (player1 === 'rock' && (player2 === 'lizard' || player2 === 'scissors')) ||
    (player1 === 'paper' && (player2 === 'rock' || player2 === 'spock')) ||
    (player1 === 'scissors' && (player2 === 'paper' || player2 === 'lizard')) ||
    (player1 === 'lizard' && (player2 === 'paper' || player2 === 'spock')) ||
    (player1 === 'spock' && (player2 === 'rock' || player2 === 'scissors'))
  ) {
    return '¡Humano gana!';
  } else {
    return '¡Maquina gana!';
  }
}


let puntajes = {
  humano: 0,
  maquina: 0
};

function actualizarPuntajes(playRockPaperScissorsLizardSpock: string , puntajes: { humano: number; maquina: number; }) {
  if (playRockPaperScissorsLizardSpock === "¡Humano gana!") {
    puntajes.humano++;
  } else if (playRockPaperScissorsLizardSpock === "¡Maquina gana!") {
    puntajes.maquina++;
  }

  // No hacemos nada si el resultado es "¡Es un empate!"

  return puntajes;
}