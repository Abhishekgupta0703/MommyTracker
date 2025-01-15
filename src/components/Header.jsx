import React from "react";
import Hero from "./Hero";

function Header() {
  return (
    <header className="bg-pink-500 text-white p-3 shadow-md flex w-full items-center justify-between">
      <div className="">
        <h1 className="text-2xl font-bold">Mum Track</h1>
        <p className="text-sm">Supporting Motherhood with Love</p>
      </div>
      <Hero/>
    </header>
  );
}

export default Header;
