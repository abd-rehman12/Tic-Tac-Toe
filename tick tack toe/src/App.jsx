import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Game from "./assets/components/Game";

function App() {
  return (
    <>
      <div className=" min-h-screen bg-mintGreen">
        <h3 className="text-7xl font-bold text-center text-darkBlue "> 
          TIC <span className="text-fullBlue ">TAC</span> TOE
        </h3>

        <Game/>
      </div>
    </>
  );
}

export default App;
