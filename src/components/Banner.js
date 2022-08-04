//! Баннер внизу под полем поиска

export default function Banner(props) {
    const { bannerParam } = props;

    return (
        <div className="banner">
            <a className="banner__link" href={bannerParam.link}>
                <img className="banner__img" src={bannerParam.img} alt={bannerParam.alt}></img>
            </a>
        </div>
    )
}