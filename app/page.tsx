import Link from "next/link"
import { Navbar } from "./Navbar"
import Game from './game/page'
import Home from "./lib/useLogic";


export default function Page() {
  return (
    <div className="h-screen w-screen bg-[#171D3F]">
      <Navbar />
      <Game />
      <Home />
    </div>
  );
}
