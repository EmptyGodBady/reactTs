import { useState } from "react";
import "./App.css";
import { InputTask } from "./components/listItem";
import { MyButton } from "./components/myButton";


function App() {
  const [tasks, setTasks] = useState<{isDone:boolean;title:string;}[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateTask = () => {
    const newTask = { title: inputValue, isDone: false };
    setTasks((prev) => [...prev, newTask]);
    setInputValue('');
  };
  const handleDoneClick = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: true } : task
      )
    );

  }


  return (
    <>
      <div className="bg-[#2B333B] h-[100vh] flex items-center justify-center text-[#E0E0E0]">
        <div className="w-[548px] min-h-[40px] flex flex-col gap-6">
          <div>
          <InputTask inputClass="myInputClass" value={inputValue} onChange={handleInputChange}/>
          <MyButton buttonWidth={114} onClick={handleCreateTask}>Create</MyButton>
          </div>
          <div>
            {tasks.map((task, index) => (
              <div>
                <input className={`${task.isDone ? "line-through" : ""} mb-8 w-[400px] h-[40px] pl-2 bg-[#3A444F] border border-white rounded-lg `} key={index} type="text" value={task.title} readOnly />
                <MyButton buttonWidth={50} onClick={()=>{handleDoneClick(index)}}>Done</MyButton>
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
