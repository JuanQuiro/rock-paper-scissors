'use client'

import BasicGame from "./page";
import ExtendedGame from "../gameextend/page";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import { GiPunchBlast, GiSpockHand, GiSwordClash } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

interface LeaderboardPlayer {
  name: string;
  score: number;
}

enum GameType {
  Basic = "basic",
  Extended = "extended",
}

const GamePage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>(GameType.Basic);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [score, setScore] = useState<number>(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardPlayer[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleGameChange = (game: GameType): void => {
    setSelectedGame(game);
  };

  const handleScoreChange = (newScore: number): void => {
    setScore(newScore);
  };

  const handleLeaderboardChange = (newLeaderboard: LeaderboardPlayer[]): void => {
    setLeaderboard(newLeaderboard);
  };

  const handlePlayAgain = (): void => {
    setTimeLeft(10);
    setScore(0);
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
      <Link href="/">
        <p className="text-blue-500 mb-4">Regresar a la página principal</p>
      </Link>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="w-full max-w-5xl h-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className={`p-8 bg-white rounded-lg shadow-lg ${
              selectedGame === GameType.Basic && "border-2 border-green-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGameChange(GameType.Basic)}
          >
            <h2 className="text-2xl font-bold mb-4">Básico</h2>
            <div className="flex items-center justify-center mb-4">
              <FaGamepad size={48} />
              <h3 className="text-xl font-bold ml-4">3 rondas</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center">
                <GiPunchBlast size={32} />
              </div>
              <div className="flex items-center justify-center">
                <GiSpockHand size={32} />
              </div>
              <div className="flex items-center justify-center">
                <GiSwordClash size={32} />
              </div>
            </div>
          </motion.div>
          <motion.div
            className={`p-8 bg-white rounded-lg shadow-lg ${
              selectedGame === GameType.Extended && "border-2 border-green-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGameChange(GameType.Extended)}
          >
            <h2 className="text-2xl font-bold mb-4">Extendido</h2>
            <div className="flex items-center justify-center mb-4">
              <FaGamepad size={48} />
              <h3 className="text-xl font-bold ml-4">5 rondas</h3>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex items-center justify-center">
                <GiPunchBlast size={32} />
              </div>
              <div className="flex items-center justify-center">
<GiSpockHand size={32} />
</div>
<div className="flex items-center justify-center">
<GiSwordClash size={32} />
</div>
<div className="flex items-center justify-center">
<GiPunchBlast size={32} />
</div>
<div className="flex items-center justify-center">
<GiSpockHand size={32} />
</div>
</div>
</motion.div>
</div>
)}
{!isLoading && (
<div className="w-full flex flex-col items-center justify-center mt-8">
{selectedGame === GameType.Basic && (
<BasicGame
timeLeft={timeLeft}
score={score}
onScoreChange={handleScoreChange}
onLeaderboardChange={handleLeaderboardChange}
onPlayAgain={handlePlayAgain}
/>
)}
{selectedGame === GameType.Extended && (
<ExtendedGame timeLeft={timeLeft} score={score} onScoreChange={handleScoreChange} onLeaderboardChange={handleLeaderboardChange} onPlayAgain={handlePlayAgain} />
)}
{timeLeft <= 0 && (
<div className="mt-8">
<h2 className="text-3xl font-bold mb-4">¡Tiempo agotado!</h2>
<p className="text-xl mb-4">Tu puntuación final es: {score}</p>
<Link href="/leaderboard">
<p className="text-blue-500 mb-4">
Ver tabla de líderes <MdKeyboardArrowRight />
</p>
</Link>
<button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg" onClick={handlePlayAgain}>
Jugar de nuevo
</button>
</div>
)}
{leaderboard.length > 0 && (
<div className="mt-8">
<h2 className="text-3xl font-bold mb-4">Tabla de líderes</h2>
<table className="w-full">
<thead>
<tr>
<th className="text-left">Nombre</th>
<th className="text-right">Puntuación</th>
</tr>
</thead>
<tbody>
{leaderboard.map((player, index) => (
<tr key={index}>
<td className="text-left">{player.name}</td>
<td className="text-right">{player.score}</td>
</tr>
))}
</tbody>
</table>
</div>
)}
</div>
)}
</motion.div>
);
};

export default GamePage;