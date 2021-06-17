import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='h-screen flex flex-col items-center justify-center p-8'>
      <header className='text-center w-auto mb-5 text-3xl text-white'>
        Got stuff to do?
      </header>
      <div className='w-full max-w-lg'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)}
            onUpdate={() => updateTodo(index)}
          ></Todo>
        ))}
        <TodoForm onSave={(todoText) => addTodo(todoText)} />
      </div>
    </div>
  );

  function addTodo(todoText) {
    if (todoText === "") {
      alert("Please give your todo a name");
      return;
    }

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

  function updateTodo(index) {
    let newTodos = [...todos];
    let updated = newTodos[index];

    setTodos(newTodos);
  }
}

export default App;
