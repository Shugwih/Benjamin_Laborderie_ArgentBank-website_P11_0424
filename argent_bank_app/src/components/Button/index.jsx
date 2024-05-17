import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ to, children, className, onClick, type = "button" }) {
    const navigate = useNavigate();

    const handleClick = (event) => { 
        if (onClick) {
            onClick();
        }

        if (to) {
            event.preventDefault(); 
            navigate(to);
        }
    };
    
    const buttonClasses = className ? styles[className] : styles['sign-in-button'];

    return (
        <button type={type} className={buttonClasses} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;
