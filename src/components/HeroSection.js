import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {

    const linkRedirect = () => {
        window.open( 'https://opensea.io');
    }
    return (
        <div className='hero-container'>
            <h1 className="greeting-title">
                создай с нами свою NFT
            </h1>
            <p className="bio">
                Покупай или продавай свое или чужое творчество! Развивайся вместе с нами в огромном криптосообществе
            </p>
            <div className='hero-btns'>
                <Link to='/Services'  className='hero__btn'>
                        Услуги
                </Link>
                <Link to='/Home' className='hero__btn' onClick={linkRedirect}>
                        Купить
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;