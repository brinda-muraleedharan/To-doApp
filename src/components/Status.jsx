import styles from "./status.module.css";
let Status = ({ completedTasks, totalTasks }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed To Dos:{completedTasks}</span>
      <span className={styles.item}>Total To Dos:{totalTasks}</span>
    </div>
  );
};
export default Status;
