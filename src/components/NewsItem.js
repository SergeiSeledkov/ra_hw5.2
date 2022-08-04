//! Отображает каждую новость для списка из цикла

export default function NewsItem(props) {
    const { item } = props;

    return (
        <li className="news__item">
            <a className="news__link" href={item.link}>{item.title}</a>
        </li>
    )
}