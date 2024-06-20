import styles from "./todoitem.module.css";
let ToDoItem = ({
  toDoItemName,
  deleteTask,
  id,
  completedFlag,
  handleComplete,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={completedFlag ? styles.completed : ""}
          onClick={() => handleComplete(id)}
        >
          {toDoItemName}
        </span>
        <button
          className={styles.deleteButton}
          onClick={() => {
            deleteTask(id);
          }}
        >
          X
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
};
export default ToDoItem;
