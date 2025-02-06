import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;
    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={styles.wrapper} onMouseDown={handleWrapperClick}>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                    <button onClick={onClose}>X</button>
                </header>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
