import React, { useState } from "react";

function TodoForm(props) {
  const [todoText, setTodoText] = useState("");

  return (
    <form className='bg-white rounded-lg p-3' onSubmit={(e) => handleSubmit(e)}>
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
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (todoText === "") return;

    setTodoText("");
    props.onSave(todoText);
  }
}

export default TodoForm;
