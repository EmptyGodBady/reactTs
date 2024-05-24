import React from "react";
import "./App.css";
import { InputTask } from "./components/listItem";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-[#2B333B] h-[100vh] flex items-center justify-center">
      <div className="w-[528px] min-h-[400px] flex flex-col ">
        <InputTask inputClass="myInputClass" />
      </div>
    </div>
  );
}

export default App;
