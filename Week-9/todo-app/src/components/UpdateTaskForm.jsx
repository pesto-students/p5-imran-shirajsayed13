const UpdateTaskForm = ({ updateTask, changeTask, updateTaskData, cancelUpdate }) => {
  return (
    <>
      {/* Update Task */}
      <div className='row'>
        <div className='col'>
          <input
            value={updateTask && updateTask.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg" />
        </div>
        <div className='col-auto'>
          <button
            onClick={updateTaskData}
            className='btn btn-lg btn-success mr-20'>Update</button>
          <button
            onClick={cancelUpdate}
            className='btn btn-lg btn-warning'>Cancel</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default UpdateTaskForm;