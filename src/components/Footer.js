import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer () {
    const twitterLink = () => {
        window.open( 'https://twitter.com/Mustafa87256705');
    }

    const instLink = () => {
        window.open('https://www.instagram.com');
    }

    const fbLink = () => {
        window.open('https://www.facebook.com');
    }
    return (
            <div className='footer-container'>
                <section className='footer-subscription'>
                        <p className='footer-subscription-heading'>
                            Write your mail we will contact you as soon as possible
                        </p>
                        <div className='input-areas'>
                            <form>
                                <input
                                    className='footer-input'
                                    name='email'
                                    type='email'
                                    placeholder='Your Email'
                                />
                                <input type='submit' className='submit-input' value='send email'/>
                            </form>
                        </div>
                </section>

                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <Link to='/' className='social-logo'>
                                MusssA
                            </Link>
                        </div>
                        <small class='website-rights'>MusssA © 2022</small>
                        <div class='social-icons'>
                            <Link class='social-icon-link facebook' to='/' target='_blank'
                                aria-label='Facebook' onClick={fbLink}
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link class='social-icon-link instagram' to='/' target='_blank'
                                aria-label='Instagram' onClick={instLink}>
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link class='social-icon-link twitter' to='/' target='_blank'
                                aria-label='Twitter' onClick={twitterLink}>
                                <i class='fab fa-twitter' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
    );
}

