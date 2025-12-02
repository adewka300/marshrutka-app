import { useEffect } from 'react';
import './RoutePage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function RoutePage3() {
  const routeId = 3;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="page">
      <Header currentPage="routes" />
      
      <main>
        <section className="hero">
          <div className="hero__image">
            <img src="/assets/images/hero.jpg" alt={`Маршрут ${routeId}`} />
          </div>
          <div className="container hero__content">
            <h1>Маршрут {routeId}: такой-то такой-то там пум</h1>
            <p>
              Это же Бубльгум или это баобаб На вид как собака (—Бака) или это баобаб Может быть
              бумага (—Мага) или это баобаб Это что ль макака (—Кака), это баобаб
            </p>
            <button className="button button--primary" type="button">Добавить в избранное</button>
          </div>
        </section>

        <section className="day-block">
          <div className="container day-block__content">
            <div className="day-block__text">
              <p className="day-block__title">День 1. Марабу</p>
              <p>
                Марабу, я летаю, будто птица марабу Ты танцуешь, я уже в твоём плену Пахнешь сладко
                шоколадом на ветру Я марабу Марабу, я летаю, будто птица марабу Ты танцуешь, я уже в
                твоём плену Пахнешь сладко шоколадом на ветру Я марабу
              </p>
            </div>
            <figure className="day-block__media day-block__media--tall">
              <img src="/assets/images/hero.jpg" alt="Неоновая вывеска Театр Одеон" />
              <figcaption className="day-block__caption">
                <span>Адрес: Черкесск, ул. Шоссейная, 5</span>
                <span>Часы работы: 11:00–23:00</span>
                <span>Сайт: hizhina09.ru</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="day-block">
          <div className="container day-block__content">
            <div className="day-block__text">
              <p className="day-block__title">День 2. Баобаб</p>
              <p>
                Марабу, Это же Бубльгум или это баобаб На вид как собака (—Бака) или это баобаб Может
                быть бумага (—Мага) или это баобаб Это что ль макака (—Кака), это баобаб Марабу, Это
                же Бубльгум или это баобаб На вид как собака (—Бака) или это баобаб Может быть бумага
                (—Мага) или это баобаб Это что ль макака (—Кака), это баобаб
              </p>
            </div>
            <figure className="day-block__media day-block__media--wide">
              <img src="/assets/images/hero.jpg" alt="Гастрономический музыкал" />
              <figcaption className="day-block__caption">
                <span>Адрес: Черкесск, ул. Шоссейная, 5</span>
                <span>Часы работы: 11:00–23:00</span>
                <span>Сайт: hizhina09.ru</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RoutePage3;