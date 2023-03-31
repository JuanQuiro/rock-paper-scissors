import Link from "next/link"
import Game  from "./game/page";
import {Navbar} from "./Navbar"

export default function Page() {
  return (
    <div className="h-screen w-screen bg-[#171D3F]">
      <Navbar />
      <Game />
    </div>
  );
}
