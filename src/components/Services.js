//! Нижний раздел с ссылками для перехода в другие сервисы яндекса 

export default function Services(props) {
    const { country } = props;

    return (
        <div className="services">
            <div>Погода</div>
            <div>Посещаемое</div>
            <div>Карта {country}</div>
            <div>Телепрограмма</div>
            <div>Эфир</div>
        </div>
    )
}