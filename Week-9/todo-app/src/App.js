import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';


import './App.css';

function App() {
  const [todo, setTodo] = useState([
    { "id": 1, "title": "Task 1", "status": true },
    { "id": 1, "title": "Task 1", "status": false },
  ]);

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

  }

  const changeTask = () => {

  }

  // Update Task
  const updateTaskData = () => {

  }

  return (
    <div className="container App">
      <br />
      <h1>ToDo List ReactJS App</h1>
      <br />

      {/* Update Task */}
      <div className='row'>
        <div className='col'>
          <input className="form-control form-control-lg" />
        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success mr-20'>Update</button>
          <button className='btn btn-lg btn-warning'>Cancel</button>
        </div>
      </div>
      <br />

      {/* Add Task */}
      <div className='row'>
        <div className='col'>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg" />
        </div>
        <div className='col-auto'>
          <button
            onClick={addTask}
            className='btn btn-lg btn-success'>Add Task</button>
        </div>
      </div>
      <br />

      {todo && todo.length ? '' : 'No Tasks...'}

      {
        todo && todo
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className='col taskBg'>
                  <div className={task.status ? 'done' : ''}>
                    <span className='taskNumber'>{index + 1}</span>
                    <span className='taskText'>{task.title}</span>
                  </div>
                  <div className='iconsWrap'>
                    <span title='Completed / Not Completed'
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {task.status ? null : (
                      <span title='Edit'>
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title='Delete'
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>

                  </div>
                </div>
              </React.Fragment>
            )
          })
      }
    </div>
  );
}

export default App;
