import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  return (
    <div className='h-screen flex flex-col items-center justify-center p-8'>
      <header className='text-center w-auto mb-5 text-3xl text-white'>
        Have stuff to do?
      </header>
      <div className='w-full max-w-lg'>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo}></Todo>
        ))}
        <div className='bg-white rounded-lg p-3'>
          <input
            className='transition duration-300 ease-in-out w-full p-2 border-b-2 focus:outline-none focus:border-blue-400 mb-4'
            placeholder='Enter a todo...'
            type='text'
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          ></input>
          <FontAwesomeIcon icon={["fal", "coffee"]} />
          <button
            className='bg-blue-700 active:bg-blue-800 w-full shadow-md flex items-center p-2 justify-center rounded-md text-white'
            type='submit'
            onClick={addTodo}
          >
            Add to do
          </button>
        </div>
      </div>
    </div>
  );

  function addTodo() {
    if (todoText === "") {
      alert("Please give your todo a name");
      return;
    }

    setTodoText("");
    setTodos([
      ...todos,
      {
        isComplete: false,
        text: todoText,
      },
    ]);
  }
}

export default App;
