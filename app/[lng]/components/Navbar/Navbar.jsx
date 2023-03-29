import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <section className="flex justify-center">
      <div className="grid shadow-lg cursor-default grid-cols-2 btn w-2/4 p-7 rounded-2xl h-auto bg-transparent my-7 border-[3px] normal-case border-[#5F6D88]">
        <Image
          src="/logo.svg"
          alt="It is the name of the game"
          width={100}
          height={100}
        />
        <div className="flex  justify-end">
          <div className="py-4 px-7 rounded-lg shadow-xl bg-[#F8F8F8]">
            <h2 className="text-lg font-bold  uppercase tracking-wide text-[#3347AC]/95">
              score
            </h2>
            <p className="text-5xl font-black text-[#58566A]">12</p>
          </div>
        </div>
      </div>
    </section>
  );
};
