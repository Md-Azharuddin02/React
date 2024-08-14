// import { useState } from "react";
import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

/* *************************************************************
Note : the given below code snippet is using useState hook.

//this is the main funtion to add task.
function AddTask({ onAddItem }) {

  //extaracting data from input fiedl
  const [taskName, setTaskName] = useState("");//input state
  const getTask = (input) => { //input function
    setTaskName(input.target.value);
  };

  //extaracting data from date fiedl
  const [ dateName, setDateName] = useState("");//date state
  const getDate = (date) => { //date function
    setDateName(date.target.value)
  };

  //extracting taskname & due-date and transfering the date app.jsx
  const getTastAndDaueDate = (taskName, dateName) => {
    onAddItem(taskName, dateName)
  }
  
  return (
    <>
      <div className="container app-cotainer">
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="input-task"
              placeholder="Add Task"
              onChange={(input) => getTask(input)}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="input-task"
              placeholder="15/02/2000"
              onChange={(date)=>getDate(date)}
            
            />
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-success add-btn"
              onClick={() =>  getTastAndDaueDate(taskName,dateName)}
            >
            <IoIosAddCircle className="fs-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTask;

*************************************************************/


// Note : The given below code snippet is using useRef hook.

//this is the main funtion to add task.
function AddTask({ onAddItem }) {

  const addTaskName = useRef();
  const addDueDate = useRef();

  //extracting taskname & due-date and transfering the date app.jsx
  const getTastAndDaueDate = (event) => {
    event.preventDefault()
    const newInputValue= addTaskName.current.value
    const newInputDate= addDueDate.current.value
    onAddItem(newInputValue, newInputDate)
    addDueDate.current.value=""
    addTaskName.current.value = ""
    
  }

  return (
    <>
      <div className="container app-cotainer">
        <form
          className="row"
          onSubmit={event=>getTastAndDaueDate(event)}
        >
          <div className="col-5">
            <input
              type="text"
              className="input-task"
              placeholder="Add Task"
              ref={addTaskName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="input-task"
              placeholder="15/02/2000"
              ref={addDueDate}            
            />
          </div>
          <div className="col-1">
            <button
              type="submit"
              className="btn btn-success add-btn"
             
            >
            <IoIosAddCircle className="fs-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddTask;
