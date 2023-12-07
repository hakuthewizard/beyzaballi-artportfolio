import React from 'react';
import styles from '@/styles/modal.module.css';

const Modal = ({ imageUrl, onClose, artworkDetails }) => {
  const { name, date, description } = artworkDetails || {};

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent}>
        <img src={imageUrl} alt="Modal" />
        {artworkDetails && (
          <div className={styles.modalContainer}>
            <h1>{name}</h1>

  
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
