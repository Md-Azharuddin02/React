import { useContext } from "react";
import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { ItemContext } from "../store/ItemContext";


//this is the main funtion to add task.
function AddTask() {
const  {addNewItem} = useContext(ItemContext)

  const addTaskName = useRef();
  const addDueDate = useRef();

  //extracting taskname & due-date and transfering the date app.jsx
  const getTaskAndDaueDate = (event) => {
    event.preventDefault()
    const newInputValue= addTaskName.current.value
    const newInputDate= addDueDate.current.value
    addNewItem(newInputValue, newInputDate)
    addDueDate.current.value=""
    addTaskName.current.value = ""
    
  }

  return (
    <>
      <div className="container app-cotainer">
        <form
          className="row"
          onSubmit={event=>getTaskAndDaueDate(event)}
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
