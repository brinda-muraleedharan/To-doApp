import styles from './header.module.css'
export default function Header(){
    return (
        <header className={styles['site-header']}>
            <div className={styles['site-identity']}>
                <h1>My to-do List</h1>
            </div>
        </header>
    );
}
