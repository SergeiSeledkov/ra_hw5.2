//! Отображает разделы новостей и сами новости

import NewsItem from "./NewsItem";
import { nanoid } from "nanoid";

export default function News({ ...props }) {

    return (
        <div className="news">
            <div className="news__categories">
                <div className="news__categories-item">
                    <a className="news__categories-link" href={props.catLink.now}>Сейчас в СМИ</a>
                </div>
                <div className="news__categories-item">
                    <a className="news__categories-link" href={props.catLink.inCountry}>в {props.country}</a>
                </div>
                <div className="news__categories-item">
                    <a className="news__categories-link" href={props.catLink.recomended}>Рекомендуем</a>
                </div>
            </div>
            <ul className="news__cointainer">
                {props.news.map(item => <NewsItem item={item} key={nanoid()} />)}
            </ul>
        </div>
    )
}