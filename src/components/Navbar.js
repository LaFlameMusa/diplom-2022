import React, {useState, useEffect} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
function Navbar() {
    const [click , setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);

    // ЕСЛИ ПОТРЕБУЕТСЯ КНОПКА ВХОДА ==================
    // БУДЕТ ВЫПОЛНЯТСЯ ПРОВЕРКА НА РАЗМЕР ЭКРАНА ДЛЯ МОБИЛЬНЫХ УСТРОИСТВ
    const showButton = () => {
        if(window.innerWidth < 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    // ПРИМЕР ИСПОЛЬЗОВАНИЯ НИЖЕ : 
    // /*{button && <Button buttonStyle='btn--outline'>sign in</Button>}*/

    return (
        <>
            <nav className='nav'>
                <div className='navbar-container'>
                    <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                        MusssA
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Главная
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Галерея
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Услуги
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Обратная связь
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' to='./signUp'>Обратная связь</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;