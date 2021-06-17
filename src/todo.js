import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  const [todoText, setTodoText] = useState(props.todo.text);
  const [editMode, setEditMode] = useState(false);
  const [complete, setComplete] = useState(false);
  const shortid = require("shortid").generate();

  return (
    <div
      className='my-3 p-3 bg-white rounded-lg shadow-md flex items-center cursor-pointer'
      onClick={() => updateCompletion(!complete)}
    >
      <input
        className='form-checkbox w-5 h-8'
        type='checkbox'
        name='completed'
        checked={complete}
        // onChange={}
      />
      <div className='ml-3 flex-1'>
        {editMode ? (
          <input
            className='w-full input-underline'
            type='text'
            name='todoText'
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className={`${complete ? "line-through" : ""}`}>
            {todoText}
          </span>
        )}
      </div>
      <div
        className='hover-btn'
        onClick={(e) => {
          e.stopPropagation();
          props.onDelete();
        }}
      >
        <FontAwesomeIcon className='text-red-500' icon={faTrash} />
      </div>
      <div className='hover-btn' onClick={updateEditMode}>
        <FontAwesomeIcon className='text-blue-500' icon={faEdit} />
      </div>
    </div>
  );

  function updateCompletion(completed) {
    setComplete(completed);
  }

  function updateEditMode(e) {
    e.stopPropagation();
    setEditMode(!editMode);
  }
}

export default Todo;
