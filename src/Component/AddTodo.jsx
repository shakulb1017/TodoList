import { useRef,useState} from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ onNewItem }) {

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // }
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  // }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName  = todoNameElement.current.value;
    const dueDate  = dueDateElement.current.value;
    console.log(`${todoName} due on : ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";


    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  }
  return (
    <div className="container text-center">
      <form className="row shaku-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text"
          ref={todoNameElement}
           
            placeholder="Enter Todo Here"  />
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement}
             />
        </div>
        <div className="col-2">
          <button className="btn btn-success shaku-btn-add">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo;