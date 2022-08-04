//! Содержит константы с параметрами для отображаемых компонентов. Создаёт разметку компонентов

import News from "./components/News";
import Search from "./components/Search";
import Widjet from "./components/Widjet";
import Banner from "./components/Banner";
import Services from "./components/Services";

function App() {
  const country = 'Германия';
  const categoriesLink = {
    now: '#0',
    inCountry: '#0',
    recomended: '#0'
  }
  const news = [
    {
      title: 'Новость №1',
      link: '#0'
    },
    {
      title: 'Новость №2',
      link: '#0'
    },
    {
      title: 'Новость №3',
      link: '#0'
    }
  ];
  const widjetParam = {
    img: '#0',
    alt: 'Text',
    title: 'Работа над ошибками',
    link: '#0',
    text: 'Смотрите на Яндексе и запоминайте'
  }
  const bannerParam = {
    img: '#0',
    alt: 'Text',
    link: '#0'
  }

  return (
    <div className="wrapper">
      <div className="header">
        <News country={country} catLink={categoriesLink} news={news} />
        <Widjet widjetParam={widjetParam} />
      </div>
      <div className="body">
        <Search />
        <Banner bannerParam={bannerParam} />
      </div>
      <div className="footer">
        <Services country={country} />
      </div>
    </div>
  );
}

export default App;
