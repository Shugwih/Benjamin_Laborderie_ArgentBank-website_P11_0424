import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Slices/authSlice';
import Form from '../../components/Form/';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Signin.module.scss';

function Signin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, loading, error } = useSelector(state => state.auth);

    React.useEffect(() => {
        if (isLoggedIn) {
            navigate('/User');
        }
    }, [isLoggedIn, navigate]);

    const formFields = [
        { 
            name: 'email', 
            type: 'text', 
            label: 'Username' 
        },
        { 
            name: 'password', 
            type: 'password', 
            label: 'Password' 
        }
    ];

    const handleFormSubmit = (formData) => {
        dispatch(loginUser(formData));
    };

    return (
        <main className='main bg-dark'>
            <section className={styles['sign-in-content']}>
            <Form 
            fields={formFields} 
            onSubmit={handleFormSubmit} 
            includeRememberMe={true}
            title="Sign in"
            icon={faUserCircle}
            disabled={loading}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            </section>
        </main>
    );
}

export default Signin;
