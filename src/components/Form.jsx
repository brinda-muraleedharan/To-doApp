import styles from "./form.module.css";
export default function Form({ toDoItem, onToDoChange, onButtonClick }) {
  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter to do item..."
          value={toDoItem}
          onChange={(e) => {
            onToDoChange(e);
          }}
        />
        <button
          className={styles.modernButton}
          type="submit"
          onClick={(e) => onButtonClick(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
