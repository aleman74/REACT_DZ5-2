// import React from 'react';

/**
 * Блок отвечает за отображение стандартных блоков с сылками: новостей, погоды, телепрограммы, ...
 * @param {string} props.img - ссылка на картинку
 * @param {string} props.title - заголовок
 * @param {string} props.text - текст
 * @param {string} props.ref - ссылка
 * @param {string} props.class_view - css class для отображения
 * @param {Object[]} props.data - массив дочерних элементов
 * */

const BlockItem = (props) => (
    <div className={props.class_view}>
        <a href={props.ref}>
            <img src={props.img} />
        </a>
        <a href={props.ref}>
            <span>props.title</span>
            <span>props.text</span>
        </a>

        {props.data.map(o => <BlockItem {...o} />)}

    </div>
);

export default BlockItem;
