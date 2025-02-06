import { useState } from 'react';
import { Seminar, SeminarAPIResponse } from '../../../types/seminarTypes';
import Modal from '../../Modal/Modal';
import EditSeminar from '../Edit/EditSeminar';

import styles from './SeminarListItem.module.css';
import DeleteSeminar from '../Delete/DeleteSeminar';
import { castDateToString } from '../../../helpers/dataCast';

interface SeminarListItemProps {
    seminar: Seminar
    deleteSeminarHandler: (id: string) => void
    updateSeminarHandler: (seminar: SeminarAPIResponse) => Promise<SeminarAPIResponse>
}

function SeminarListItem(props: SeminarListItemProps) {
    const { seminar,deleteSeminarHandler } = props;
    const { id, title, description, date, time, photo } = seminar;

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const openEditModal = () => {
        setIsEditOpen(true);
    };

    const closeEditModal = () => {
        setIsEditOpen(false);
    };

    const openDeleteModal = () => {
        setIsDeleteOpen(true);
    };
    
    const closeDeleteModal = () => {
        setIsDeleteOpen(false);
    };

    return (
        <>
            <li className={styles.item}>
                <img src={photo} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{castDateToString(date)}</p>
                <p>{time}</p>
                <footer className={styles.footer}>
                    <button onClick={openEditModal}>Редактировать</button>
                    <button onClick={openDeleteModal} className={styles.delete} >Удалить</button>
                </footer>
            </li>
            <Modal title="Редактор семинара" isOpen={isEditOpen} onClose={closeEditModal}>
                <EditSeminar seminar={props.seminar} updateSeminarHandler={props.updateSeminarHandler} />
            </Modal>
            <Modal title="Вы уверены?" isOpen={isDeleteOpen} onClose={closeDeleteModal}>
                <DeleteSeminar  title={title} deleteSeminarHandler={() => deleteSeminarHandler(id)}/>
            </Modal>
        </>
    );
}

export default SeminarListItem;