// import React from 'react';

/**
 * Блок отвечает за поиск в интернете
 * @param {string} props.text - текст для поиска
 * @param {string} props.class_view - css class для отображения
 * */

const BlockSearch = (props) => (
    <div className={props.class_view}>
        <input type="text" value={props.text} />
    </div>
);

export default BlockSearch;
