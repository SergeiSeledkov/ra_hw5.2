//! Отображает виджет вверху справа

export default function Widjet(props) {
    const { widjetParam } = props;

    return (
        <div className="widjet">
            <img className="widjet__image" src={widjetParam.img} alt={widjetParam.alt}></img>
            <a className="widjet__link" href={widjetParam.link}>{widjetParam.title}</a>
            <span className="widjet__text">{widjetParam.text}</span>
        </div >
    )
}