import '../../App.css';
import React from 'react';

export default function Services() {
    return( 
        <div className='main__wrapper'>   
            <main className="main">
                <section className="our-services">
                    <article className="first-box">
                        <article className="mission-article">
                            <h2 className="mission-article-title">Хост Ваших Работ</h2>
                            <p className="mission-article-desq">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae corrupti.
                            Lorem ipsum dolor.
                            </p> 
                        </article>
                        <article className="vision-article">
                            <h2 className="vision-article-title">Продвижение Арт Аккаунта</h2>
                            <p className="vision-article-desq">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae corrupti.
                                Lorem ipsum dolor.
                            </p>
                        </article>
                    </article>
                    <article className="second-box">
                        <article className="act-box">
                            <h2>Создание вашей коллекции</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, rem enim repellat, repudiandae ipsum 
                            </p>
                        </article>
                        <div className="column-articles-box">
                            <article className="long-box-article">
                                <h2>Создание одной NFT</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, rem enim repellat, repudiandae ipsum explicabo vero quaerat dicta laudantium iste vitae quas animi molestias eius iure.
                                </p>
                            </article>
                            <article className="long-box-article">
                                <h2>Разработка Коллекции/NFT</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, rem enim repellat, repudiandae ipsum explicabo vero quaerat dicta laudantium iste vitae quas animi molestias eius iure.
                                </p>
                            </article>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}