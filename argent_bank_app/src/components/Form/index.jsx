import React, { useState, useEffect } from 'react';
import Button from '../Button/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Form.module.scss';

function Form({
    fields,
    onSubmit,
    onCancel,
    title,
    icon,
    buttonText = 'Save',
    cancelButtonText = 'Cancel',
    includeCancelButton = false,
    includeRememberMe = false,
    disabled
}) {
    const [formData, setFormData] = useState(fields.reduce((acc, field) => ({
        ...acc,
        [field.name]: field.defaultValue || ''
    }), {}));
    
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        if (includeRememberMe) {
            const savedEmail = localStorage.getItem('email');
            if (savedEmail) {
                setFormData(prev => ({ ...prev, email: savedEmail }));
                setRememberMe(true);
            }
        }
    }, [includeRememberMe]);

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rememberMe) {
            localStorage.setItem('email', formData.email);
        } else {
            localStorage.removeItem('email');
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {icon && <FontAwesomeIcon icon={icon} className={styles['icon']} />}
            {title && <h1>{title}</h1>}
            {fields.map(field => (
                <div key={field.name} className={styles['input-wrapper']}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                        readOnly={field.readOnly}
                        className={styles.input}
                        placeholder={field.placeholder || ''}
                    />
                </div>
            ))}
            {includeRememberMe && (
                <div className={styles['input-remember']}>
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            )}
            <div className={styles['button-group']}>
                <Button type="submit" disabled={disabled}>{buttonText}</Button>
                {includeCancelButton && <Button onClick={onCancel}>{cancelButtonText}</Button>}
            </div>
        </form>
    );
}

export default Form;
