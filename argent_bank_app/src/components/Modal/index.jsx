import React from 'react';
import styles from './Modal.module.scss';

function Modal({ isOpen, onClose, children, extraOverlayClass = '' }) {
    if (!isOpen) return null;

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    
    const overlayClass = `${styles.modalOverlay} ${styles[extraOverlayClass]}`;

    return (
        <div className={overlayClass} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    );
}


export default Modal;
