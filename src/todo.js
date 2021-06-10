import React, { useState } from "react";

function Todo(props) {
  const [complete, setComplete] = useState(false);

  return (
    <div
      key={props.key}
      className='my-3 content-center p-3 bg-white rounded-lg shadow-md'
    >
      {props.todo.text}
    </div>
  );
}

export default Todo;
