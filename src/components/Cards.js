import React from 'react'
import './Cards.css';
import CardItem from './CardItem.js'


function Cards() {
return (
<div className='cards'>
    <h1>Последние работы наших дизайнеров!</h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>
        <ul className='cards__items'>
        <CardItem
            src='img/NFTS/cigrt.jpg'
            text='Rotten Treats'
            label='Adventure'
            path='/services'
        />
        <CardItem
            src='img/NFTS/energizer.jpg'
            text='Rotten treats'
            label='Luxury'
            path='/services'
        />
        </ul>
        <ul className='cards__items'>
        <CardItem
            src='img/NFTS/mugs.jpg'
            text='Rotten treats'
            label='Mystery'
            path='/services'
        />
        <CardItem
            src='img/NFTS/logo2.jpg'
            text='Welcome to Rotten treats'
            label='Adventure'
            path='/products'
        />
        <CardItem
            src='img/NFTS/banner.jpg'
            text='first prototype of the company banner/Первый прототип баннера компании'
            label='Adrenaline'
            path='/sign-up'
        />
        </ul>
    </div>
    </div>
</div>
);
}

export default Cards;

