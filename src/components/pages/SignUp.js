import '../../App.css';
import React from 'react';

export default function SignUp() {
    return( 
        <div className='input__wrapper'>
            
            <div className='info__block'>
                <h1>Обратная связь</h1>
                <h2>
                    Если у вас остались какие-либо вопросы, пожалуйста оставьте свой данные и мы с вами обязательно свяжемся и все подробно объясним!
                </h2>
            </div>

            <div className='form'>
                <form action='../../php/connect.php' method='POST' className='form__body'>
                    <h1 className='form__title'>Отправить Заявку</h1>
                    <div className='personal__info'>
                        <div className='form__item'>
                            <label for='formName' className='form__label'>Имя</label>
                            <input id='formName' required type='text' autocomplete="off" name='name' className='form__input'/>
                        </div>
                        <div className='form__item'>
                            <label for='email' className='form__label'>Phone</label>
                            <input id='email' type='number' autocomplete="off" required name='number' className='form__input' placeholder="+77" pattern='77'/>
                        </div>
                        <div className='form__item form__item2'>
                            <label for='number' className='form__label'>E-mail</label>
                            <input id='email' type='text' autocomplete="off" name='email' className='form__input'
                            />
                        </div>
                        <div className='form__item form__item2'>
                            <label for='city' className='form__label'>Город</label>
                            <input type='text' autocomplete="off" name='city' className='form__input'/>
                        </div>
                    </div>
                    <button className='form__button' type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    )
}