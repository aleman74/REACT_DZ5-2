// import React from 'react';

/**
 * Блок отвечает за рекламу
 * @param {string} props.img - ссылка на картинку
 * @param {string} props.ref - ссылка для перехода
 * @param {string} props.class_view - css class для отображения
 * */

const BlockAd = (props) => (
    <div className={props.class_view}>
        <a href={props.ref}>
            <img src={props.img} />
        </a>
    </div>
);

export default BlockAd;

