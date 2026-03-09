import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if(newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <div className="input-area">
        <input 
          type="text" 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;