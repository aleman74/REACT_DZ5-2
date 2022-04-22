import React from 'react';
import BlockItem from "./BlockItem";
import BlockSearch from "./BlockSearch";
import BlockAd from "./BlockAd";

/**
 * Главный блок
 * */

function BlockMain(props) {

    /** Массив объектов с данными для отображения в блоке "Новости" */
    const data_news = [];
    /** Массив объектов с данными для отображения в блоке "Работа над ошибками" */
    const data_bug = [];
    /** Массив объектов с данными для отображения в блоке "Погода" */
    const data_weather = [];
    /** Массив объектов с данными для отображения в блоке "Новости" */
    const data_map = [];
    /** Массив объектов с данными для отображения в блоке "Карта" */
    const data_visited = [];
    /** Массив объектов с данными для отображения в блоке "Телепрограмма" */
    const data_tv = [];
    /** Массив объектов с данными для отображения в блоке "Эфир" */
    const data_broadcast = [];

    const v_news = {
        img: '',
        title: 'Новости',
        text: '',
        ref: '',
        class_view: '',
        data: data_news
    }

    const v_bug = {
        img: '',
        title: 'Работа над ошибками',
        text: '',
        ref: '',
        class_view: '',
        data: data_bug
    }

    const v_weather = {
        img: '',
        title: 'Погода',
        text: '',
        ref: '',
        class_view: '',
        data: data_weather
    }

    const v_map = {
        img: '',
        title: 'Карота',
        text: '',
        ref: '',
        class_view: '',
        data: data_map
    }

    const v_visited = {
        img: '',
        title: 'Посещаемое',
        text: '',
        ref: '',
        class_view: '',
        data: data_visited
    }

    const v_tv = {
        img: '',
        title: 'Телепрограмма',
        text: '',
        ref: '',
        class_view: '',
        data: data_tv
    }

    const v_broadcast = {
        img: '',
        title: 'Эфир',
        text: '',
        ref: '',
        class_view: '',
        data: data_broadcast
    }



    return (
        <div>
            <BlockItem {...v_news}/>
            <BlockItem {...v_bug}/>

            <BlockSearch text='' class_view='' />
            <BlockAd img='' ref='' />

            <BlockItem {...v_weather}/>
            <BlockItem {...v_visited}/>
            <BlockItem {...v_map}/>
            <BlockItem {...v_tv}/>
            <BlockItem {...v_broadcast}/>
        </div>
    );
}

export default BlockMain;
