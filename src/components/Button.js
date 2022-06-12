import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    // ниже прописана логика для выбора стилизации:
    // 1) Выполняется проверка на наличие стилей
    // 2) Если стили не прописаны = применятся стили под 0 индексом
    // Это является отличной практикой так как могут появится новые стили
    // стили под 0 индексом яв-ся STYLES[0] = btn--primary SIZES[0] = btn--medium
    
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

    return(
        <Link to='./signUp' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                    >
            {/* children будет принимать в себя значения кнопки*/}
                {children}
            </button>
        </Link>
    )
};