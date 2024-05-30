import { useState } from "react";
import "./App.css";
import { InputTask } from "./components/listItem";
import { MyButton } from "./components/myButton";
import { MySearching } from "./components/MySearching";

function App() {
  const [tasks, setTasks] = useState<{ isDone: boolean; title: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = { title: inputValue, isDone: false };
    setTasks((prev) => [...prev, newTask]);
    setInputValue("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateTask();
    }
  };
  const handleDoneClick = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: true } : task,
      ),
    );
  };
  const handleDelClick = (index: number)=>{
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index)
    );
  };
  const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="bg-[#2B333B] h-[100vh] flex flex-col items-center text-[#E0E0E0]">
        <MySearching onChange={handleSearching}/>
        <div className="w-[548px] min-h-[40px] flex flex-col gap-6">
          <div>
            <InputTask
              inputClass="myInputClass"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              />
            <MyButton buttonWidth={114}
            onClick={handleCreateTask}
            >
              Create
            </MyButton>
          </div>
          <div>
            {filteredTasks.map((task, index) => (
              <div>
                <input
                  className={`${task.isDone ? "line-through" : ""} mb-8 w-[400px] h-[40px] pl-2 bg-[#3A444F] border border-white rounded-lg `}
                  key={index}
                  type="text"
                  value={task.title}
                  readOnly
                  />
                <MyButton
                  buttonWidth={50}
                  onClick={() => {
                    handleDoneClick(index);
                  }}
                  >
                  Done
                </MyButton>
                <MyButton buttonWidth={40} onClick={() => {handleDelClick(index)}}>
                  Del
                </MyButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;