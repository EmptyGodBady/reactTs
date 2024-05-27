// import React, { ChangeEvent, FormEvent } from "react";
import "./App.css";
import { InputTask } from "./components/listItem";
// import { useState } from "react";
import "./App.css";
import { MyButton } from "./components/myButton";
import React, { useState, FormEvent, ChangeEvent } from 'react';


function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setTasks([...tasks, value]);
    setValue('');
  };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
  return (
    <>
    {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          // onChange={handleChange}
        />
        <button type="submit">Добавить Input</button>
      </form> */}
      <div>
        {tasks.map((input, index) => (
          <input key={index} type="text" value={input} readOnly />
        ))}
      </div>
    <div className="bg-[#2B333B] h-[100vh] flex items-center justify-center">
      <div className="w-[528px] min-h-[400px] flex ">
        <InputTask inputClass="myInputClass" 
          />
        <MyButton onSubmit={handleSubmit}/>
      </div>
    </div>
    <div>
    </div>
    </>
  );
}

export default App;
