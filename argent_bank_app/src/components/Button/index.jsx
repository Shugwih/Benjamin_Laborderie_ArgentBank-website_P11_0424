import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ to, children, className }) {
    const navigate = useNavigate(); 


    const handleClick = () => {
        navigate(to); 
    };

    const buttonClasses = className ? styles[className] : styles['sign-in-button'];

    return (
        <button type="button" className={buttonClasses} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;
