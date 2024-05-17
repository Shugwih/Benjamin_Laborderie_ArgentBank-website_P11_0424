import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { fetchUserDetails } from '../../Slices/userSlice'; 
import { logout } from '../../Slices/authSlice';
import logo from '../../Assets/argentBankLogo-320px.webp';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { details } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchUserDetails()); 
        }
    }, [isLoggedIn, dispatch]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <header className={styles['main-nav']}>
            <div className={styles['main-nav-logo']}>
                <Link to="/"> 
                    <img 
                        className={styles['main-nav-logo-image']} 
                        src={logo}
                        width="200"
                        height="50"
                        alt='Argent Bank - Logo'>
                    </img> 
                </Link>
            </div>
            <nav>
                {isLoggedIn ? (
                    <>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <NavLink to="/User" 
                            className={({ isActive }) => isActive ? `${styles['main-nav-item']} router-link-exact-active` : styles['main-nav-item']}>
                            <span>{details?.userName}</span>
                        </NavLink>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <NavLink to="/"
                            className={({ isActive }) => isActive ? `${styles['main-nav-item']} router-link-exact-active` : styles['main-nav-item']}
                            onClick={handleLogout}>
                            <span>Sign out</span>
                        </NavLink>
                    </>
                    ) : (
                    <NavLink to="/Signin" 
                        className={({ isActive }) => isActive ? `${styles['main-nav-item']} router-link-exact-active` : styles['main-nav-item']}>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <span>Sign in</span>
                    </NavLink>
                )}
            </nav>
        </header>    
    );
}

export default Header;
