import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div class='h-screen flex flex-col items-center justify-center p-8'>
      <header className='text-center w-auto'>Have stuff to do?</header>
      <div>
        {todos.map((todo, index) => (
          <div className='w-screen max-w-lg content-center p-8 bg-white rounded-lg shadow-md'></div>
        ))}
      </div>
      <button
        class='w-1/2 flex items-center p-2 justify-center rounded-md bg-black text-white'
        type='submit'
        onClick='{}'
      >
        Add to do
      </button>
    </div>
  );
}

export default App;
