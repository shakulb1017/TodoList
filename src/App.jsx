import "./App.css";
import { useState } from "react";
import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
// import TodoItem1 from "./Component/TodoItem1";
// import TodoItem2 from "./Component/TodoItem2";
import TodoItem from "./Component/TodoItem";
import TodoItems from "./Component/TodoItems";
import WelcomeMsg from "./Component/WelcomeMsg";


function App() {
 
  const initialTodoItems = [
  {
    name : 'Buy Milk',
    dueDate : '4/10/2023'
  },
  {
    name : 'Go to collage',
    dueDate : '4/10/2023'
  },

  {
    name : 'Go to collage',
    dueDate : '4/10/2023'
  },
  {
    name : 'Go to collage',
    dueDate : '4/10/2023'
  },

]

const [todoItems , setTodoItems] = useState([])

const hamdleNewItem = (itemName , itemDueDate)=>
{
  setTodoItems((curValue) =>[...curValue , 
      {name:itemName, dueDate:itemDueDate}
    ]);
}


const handleDeleteButton = (todoItemName)=>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
  setTodoItems(newTodoItems)
}
  return (
    <>
    
      <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={hamdleNewItem}/>
      {todoItems.length === 0 &&  <WelcomeMsg/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton}/>
      </center>

    </>
  );
}

export default App;
