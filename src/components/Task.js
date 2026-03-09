import React from 'react';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;