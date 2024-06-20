import ToDoItem from "./ToDoItem";
import styles from './todolist.module.css';
export default function TodoList({todoList,deleteTask,handleComplete}){
    let sortTodos=()=>{
        return todoList.sort((a,b)=>{
            if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
        });
    }
    return(
        <div className={styles.list}>
            {sortTodos().map((item,index)=><ToDoItem key={index} toDoItemName={item.name} deleteTask={deleteTask} id={item.id} completedFlag={item.completedFlag} handleComplete={handleComplete}/>)}
        </div>
    )
}