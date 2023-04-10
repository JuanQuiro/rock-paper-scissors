"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Navbar } from "../Navbar";

//import img
import Triangulo from "./svg/Triangulo";
import Mano from "./svg/Mano";
import Piedra from "./svg/Piedra";
import Tijeras from "./svg/Tijeras";
import useResults from '../Hooks/useResults'

type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

export default function Page() {
const [clicks, setClicks] = useState(0);
const [playerChoice, setPlayerChoice] = useState<Choice>('rock');
const [machineChoice, setMachineChoice] = useState<Choice>('rock');
const [result, setResult] = useState<string>('');

const handleHuman = (choice: Choice) => {
setPlayerChoice(choice);
setClicks(clicks + 1);
};

useEffect(() => {
setPlayerChoice(window.initial_state.playerChoice);
}, []);

useEffect(() => {
const { machineChoice: machine, result: res } = useResults({
type: 'basic',
playerChoice,
onChoiceClick: () => {},
onWin: () => {console.log("Wind")},
onLose: () => {console.log("Lose")},
onDraw: () => {console.log("Empate");}
});
setMachineChoice(machine);
setResult(res);
}, [playerChoice]);

return (
<>
<div className="bg-[#171D3F] w-screen h-screen">
<Navbar />
<div className="grid justify-center items-center">
<div className=" grid grid-cols-3 gap-4 items-center justify-center">
<Triangulo width={465} height={250} />
{/* papel /}
<div onClick={() => { handleHuman("paper") }} className=" cursor-pointer z-40 shadow-xl bg-[#5571F3] rounded-full p-3">
<div className="bg-white rounded-full p-10">
<div className="box">
<Mano />
</div>
</div>
</div>
{/ Piedra /}
<div onClick={() => { handleHuman("rock") }} className="cursor-pointer shadow-xl z-40 relative top-52 bg-[#DD3051] rounded-full p-3">
<div className="bg-white rounded-full p-10">
<div className="box">
<Piedra />
</div>
</div>
</div>
{/ Tijeras */}
<div onClick={() => { handleHuman("lizard") }} className="cursor-pointer z-40 shadow-xl bg-[#ECA822] rounded-full p-3">
<div className="bg-white rounded-full p-10">
<div className="box">
<Tijeras />
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<p>Humano {playerChoice}</p>
<p>Maquina {machineChoice}</p>
<p>Resultado {result}</p>
</div>
</>
);
}