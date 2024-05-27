import React, { ChangeEvent, FormEvent } from "react";
import "./App.css";
import { InputTask } from "./components/listItem";
import { useState } from "react";
import "./App.css";
import { MyButton } from "./components/myButton";


function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <>
      <div className="bg-[#2B333B] h-[100vh] flex items-center justify-center">
        <div className="w-[528px] min-h-[400px] flex flex-col gap-6">
          <div>
          <InputTask inputClass="myInputClass"/>
          <MyButton buttonWidth={104} onClick={()=>{
            setTasks((prev)=>[...prev, "my task"])
          }}/>
          </div>
          <div>
            {tasks.map((input, index) => (
              <div>
                <input className="mb-8 w-[400px] h-[40px] pl-2 bg-[#3A444F] border border-white rounded-lg " key={index} type="text" value={input} readOnly />
                <MyButton buttonWidth={40} onClick={()=>{}}>Done</MyButton>
                <MyButton buttonWidth={40} onClick={()=>{}}>Del</MyButton>
              </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
