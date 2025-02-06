import styles from './DeleteSeminar.module.css';

function DeleteSeminar({title, deleteSeminarHandler}: { title: string, deleteSeminarHandler: () => void}) {
    return (
        <div className={styles.container}>
            <p>Вы действительно хотите удалить семинар: "{title}"?</p>
            <button onClick={deleteSeminarHandler} className={styles.delete}>Удалить</button>
        </div>
    );
}

export default DeleteSeminar;