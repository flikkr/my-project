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
          <Todo
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)}
          ></Todo>
        ))}
        <form className='bg-white rounded-lg p-3' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              className='input-underline'
              placeholder='Enter a todo...'
              type='text'
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            ></input>
            <span className='text-red-500 hidden'>Invalid input</span>
          </div>
          <button
            className='bg-blue-700 active:bg-blue-800 w-full shadow-md flex items-center p-2 justify-center rounded-md text-white'
            type='submit'
          >
            Add to do
          </button>
        </form>
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

  function deleteTodo(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleSubmit(e) {
    if (todoText === "") return;

    addTodo(todoText);
  }
}

export default App;
