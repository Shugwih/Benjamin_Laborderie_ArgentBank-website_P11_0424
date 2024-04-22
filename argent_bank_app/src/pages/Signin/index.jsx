import React, { useEffect } from 'react';
import styles from './Signin.module.scss';
//import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/'

function Signin() {

    useEffect(() => {
        document.title = "Argent bank - Sign in";
    }, []);

    return (
        <main className='main bg-dark'>
            <section className={styles['sign-in-content']}>
                <FontAwesomeIcon icon={faUserCircle} className={styles['sign-in-icon']} />
                <h1>Sign In</h1>
                <form>
                    <div className={styles['input-wrapper']}>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" id="username" />
                    </div>
                    <div className={styles['input-wrapper']}>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" />
                    </div>
                    <div className={styles['input-remember']}>
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                        <input type="checkbox" id="remember-me" />
                    </div>
                    <Button to="/User">
                        Sign in
                    </Button>
                </form>
            </section>
        </main>     
    )
}

export default Signin