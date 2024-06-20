import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Status from "./Status";

let Todo = () => {
  const [toDoItem, setTodoItem] = useState("");
  const [toDoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);
  const completed = toDoList.filter(
    (item) => item.completedFlag == true
  ).length;
  let onToDoChange = (e) => {
    let val = e.target.value;
    setTodoItem(() => val);
  };

  let onButtonClick = (e) => {
    e.preventDefault();
    console.log("brinda");
    let todoObj = { name: toDoItem, completedFlag: false, id: counter };
    setTodoList((toDoList) => [...toDoList, todoObj]);
    setTodoItem("");
    setCounter((counter) => counter + 1);
  };
  let deleteTask = (id) => {
    alert(id);
    deleteTaskFromList(toDoList, id);
  };
  let deleteTaskFromList = (toDoList, id) => {
    setTodoList(toDoList.filter((item) => id !== item.id));
  };
  let handleComplete = (id) => {
    console.log(id + "test");
    toDoList.forEach((item) => {
      if (item.id == id) {
        item.completedFlag = !item.completedFlag;
      }
    });
    setTodoList([...toDoList]);
  };

  return (
    <div>
      <Form
        toDoItem={toDoItem}
        onToDoChange={onToDoChange}
        onButtonClick={onButtonClick}
      ></Form>
      <TodoList
        todoList={toDoList}
        deleteTask={deleteTask}
        handleComplete={handleComplete}
      ></TodoList>
      <Status completedTasks={completed} totalTasks={toDoList.length}></Status>
    </div>
  );
};
export default Todo;
