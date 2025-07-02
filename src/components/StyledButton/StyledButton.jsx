import React from 'react';
import styles from './StyledButton.module.css';

const StyledButton = ({ label, onClick, variant = 'default' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default StyledButton;
