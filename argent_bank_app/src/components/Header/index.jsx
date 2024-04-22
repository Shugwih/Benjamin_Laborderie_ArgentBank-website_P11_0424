import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Assets/argentBankLogo-320px.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
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
                <NavLink to="/Signin" 
                    className={({ isActive }) => isActive ? `${styles['main-nav-item']} router-link-exact-active` : styles['main-nav-item']}> 
                    <FontAwesomeIcon icon={faUserCircle} /> 
                    Sign in
                </NavLink>
            </nav>
        </header>    
    )
}


export default Header
