import { useState } from 'react';

import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateTaskForm from './components/UpdateTaskForm.jsx'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setTodo([...todo, newEntry])
      setNewTask('')
    }
  }

  // Delete task
  const deleteTask = (id) => {
    let newTasks = todo.filter(task => task.id !== id)
    setTodo(newTasks)
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = todo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setTodo(newTask)
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateTask('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateTask.id,
      title: e.target.value,
      status: updateTask.status ? true : false
    }
    setUpdateTask(newEntry);
  }

  // Update Task
  const updateTaskData = () => {
    let filterRecords = [...todo].filter(task => task.id !== updateTask.id);
    let updatedObject = [...filterRecords, updateTask];
    setTodo(updatedObject);
    setUpdateTask('');

  }

  return (
    <div className="container App">
      <br />
      <h1>ToDo List ReactJS App</h1>
      <br />

      {updateTask && updateTask ? (
        <UpdateTaskForm
          updateTask={updateTask}
          changeTask={changeTask}
          updateTaskData={updateTaskData}
          cancelUpdate={cancelUpdate}
        />

      ) : (
        
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {todo && todo.length ? '' : 'No Tasks...'}

      <ToDo
        todo={todo}
        markDone={markDone}
        setUpdateTask={setUpdateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
