//! Поисковая панель (левый логотип, верхнее меню с ссылками, блок ввода и кнопку отправки)

import { nanoid } from "nanoid";

export default function Search() {
    return (
        <div className="search">
            <div className="search__logo"></div>
            <div className="search__panel">
                <ul className="search__panel-categories">
                    <li className="search__panel-item" key={nanoid()}>
                        <a className="search__panel-link" href="#0">Видео</a>
                    </li>
                    <li className="search__panel-item" key={nanoid()}>
                        <a className="search__panel-link" href="#0">Картинки</a>
                    </li>
                    <li className="search__panel-item" key={nanoid()}>
                        <a className="search__panel-link" href="#0">Новости</a>
                    </li>
                </ul>
                <div className="search__field">
                    <input className="search__field-input" type="text"></input>
                    <button className="search__field-button">Найти</button>
                </div>
            </div>
        </div>
    )
}