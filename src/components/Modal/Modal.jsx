import { useEffect, useCallback } from 'react';
import { createPortal } from "react-dom";
import css from "../Modal/Modal.module.css";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }
  
  return createPortal(
      <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal} >
          {children}
        </div>
      </div>, modalRoot);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal;