import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LMPToDueDate from "./components/LMPToDueDate";
import DueDateToLMP from "./components/DueDateToLMP";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow p-4">
        <div className="grid lg:grid-cols-2 gap-6">
          <LMPToDueDate />
          <DueDateToLMP />
        </div>
      </main>
      <Hero/>
      <Footer />
    </div>
  );
}

export default App;
