import { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const totalRoutes = 5;

  useEffect(() => {
    const header = headerRef.current;
    const hero = heroRef.current;
    
    if (!header || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('site-header--solid', !entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToRoutes = () => {
    const element = document.getElementById('routes-section');
    if (element) {
      const headerHeight = 96;
      const offset = headerHeight - 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleRouteCardClick = (routeId) => {
    navigate(`/route/${routeId}`);
  };

  const handlePrevRoute = () => {
    if (currentRouteIndex > 0) {
      setCurrentRouteIndex(prev => prev - 1);
    }
  };

  const handleNextRoute = () => {
    if (currentRouteIndex < totalRoutes - 3) {
      setCurrentRouteIndex(prev => prev + 1);
    }
  };

  const handlePhotobankClick = () => {
    navigate('/photobank', { replace: true });
    window.scrollTo(0, 0);
  };

  const handleAllNewsClick = () => {
  navigate('/news'); 
  window.scrollTo(0, 0);
};

const handleParksClick = () => {
  navigate('/places/parks');
};

const handleRestaurantsClick = () => {
  navigate('/places/restaurants');
};

const handleMuseumsClick = () => {
  navigate('/places/museums');
};

  // 5 отдельных карточек с РАЗНЫМИ данными
  const routeCards = [
    { 
      id: 1, 
      title: "Маршрут 1", 
      description: "Посетите наш театр замечательный такой",
      image: "/assets/images/hero.jpg"
    },
    { 
      id: 2, 
      title: "Маршрут 2", 
      description: "Прогулка по историческому центру",
     image: "/assets/images/hero.jpg"
    },
    { 
      id: 3, 
      title: "Маршрут 3", 
      description: "Гастрономическое путешествие",
      image: "/assets/images/hero.jpg"
    },
    { 
      id: 4, 
      title: "Маршрут 4", 
      description: "Архитектурные шедевры города",
      image: "/assets/images/hero.jpg"
    },
    { 
      id: 5, 
      title: "Маршрут 5", 
      description: "Вечерняя романтическая прогулка",
      image: "/assets/images/hero.jpg"
    }
  ];

  return (
    <div className="page page--home">
      <Header 
        ref={headerRef} 
        pageType="home" 
        currentPage="" 
      />
      
      <main>
        <section className="home-hero" ref={heroRef}>
          <div className="home-hero__image">
            <img src="/assets/images/hero.jpg" alt="Москва на рассвете" />
          </div>
          <div className="container home-hero__content">
            <div>
              <p className="home-hero__eyebrow">Маршрутка<br />по Москве</p>
              <p className="home-hero__lead">Онлайн квест по старой Риге, что-то такое</p>
              <button 
                className="button button--primary button--solid" 
                type="button"
                onClick={scrollToRoutes}
              >
                Присоединиться
              </button>
            </div>
          </div>
        </section>

        <section id="routes-section" className="home-section home-section--routes">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Маршруты</h2>
                <p>Бесплатные изображения туристических объектов и природы со всей Москвы</p>
              </div>
            </div>
            <div className="routes-carousel">
              <div className="cards-row cards-row--routes">
                {routeCards.slice(currentRouteIndex, currentRouteIndex + 3).map((route) => (
                  <article 
                    key={route.id}
                    className="route-card"
                    onClick={() => handleRouteCardClick(route.id)}
                  >
                    <figure>
                      <img src={route.image} alt={route.title} />
                      <figcaption>
                        <strong>{route.title}</strong>
                        <span>{route.description}</span>
                      </figcaption>
                    </figure>
                  </article>
                ))}
              </div>
            </div>
            
            {/* Стрелка "Назад" - показывается только если есть куда листать */}
            {currentRouteIndex > 0 && (
              <button 
                className="slider-button slider-button--prev"
                type="button" 
                aria-label="Предыдущий маршрут"
                onClick={handlePrevRoute}
              >
                <img src="/assets/icons/chevron.svg" alt="" aria-hidden="true" />
              </button>
            )}
            
            {/* Стрелка "Вперед" - показывается только если есть куда листать */}
            {currentRouteIndex < totalRoutes - 3 && (
              <button 
                className="slider-button slider-button--next"
                type="button" 
                aria-label="Следующий маршрут"
                onClick={handleNextRoute}
              >
                <img src="/assets/icons/chevron.svg" alt="" aria-hidden="true" />
              </button>
            )}
             {/* <-- Вставляем индикатор прогресса/точки сюда --> */}
          <div className="routes-dots">
          {Array.from({ length: totalRoutes - 2 }).map((_, idx) => (
            <div
              key={idx}
              className={`routes-dots__dot ${idx === currentRouteIndex ? 'active' : ''}`}
              onClick={() => setCurrentRouteIndex(idx)} // <-- при клике переключаемся на этот индекс
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
          </div>
        </section>

        <section id="places-section" className="home-section home-section--places">
  <div className="container">
    <div className="section-header">
      <div>
        <h2>Популярные места</h2>
      </div>
    </div>
    <div className="cards-row cards-row--places">
      <article 
        className="place-card"
        onClick={handleParksClick}
      >
        <figure>
          <img src="/assets/images/hero.jpg" alt="Парки" />
          <figcaption>
            <strong>Парки</strong>
            <span>Посетите наш театр замечательный такой</span>
          </figcaption>
        </figure>
      </article>
      <article 
        className="place-card"
        onClick={handleRestaurantsClick}
      >
        <figure>
          <img src="/assets/images/hero.jpg" alt="Рестораны" />
          <figcaption>
            <strong>Рестораны</strong>
            <span>Посетите наш театр замечательный такой</span>
          </figcaption>
        </figure>
      </article>
      <article 
        className="place-card"
        onClick={handleMuseumsClick}
      >
        <figure>
          <img src="/assets/images/hero.jpg" alt="Музеи" />
          <figcaption>
            <strong>Музеи</strong>
            <span>Посетите наш театр замечательный такой</span>
          </figcaption>
        </figure>
      </article>
    </div>
  </div>
</section>

        <section id="photobank-section" className="home-section home-section--photobank">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Фотобанк</h2>
                <p>Бесплатные изображения туристических объектов и природы со всей Москвы</p>
              </div>
            </div>
            <div className="photobank-preview">
              <figure className="pb-card">
                <img src="/assets/images/hero.jpg" alt="Фотография 1" />
              </figure>
              <figure className="pb-card">
                <img src="/assets/images/hero.jpg" alt="Фотография 2" />
              </figure>
              <figure className="pb-card">
                <img src="/assets/images/hero.jpg" alt="Фотография 3" />
              </figure>
              <div className="pb-card-wrapper">
                <figure className="pb-card pb-card--button">
                  <img src="/assets/images/hero.jpg" alt="Фотография 4" />
                </figure>
                <button 
                  className="button button--outline photobank-button" 
                  type="button"
                  onClick={handlePhotobankClick}
                >
                  Перейти
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="news-section" className="home-section home-section--news">
          <div className="container">
            <div className="section-header section-header--with-link">
              <div>
                <h2>Новости</h2>
                <p>Бесплатные изображения туристических объектов и природы со всей Москвы</p>
              </div>
              <button 
                className="news-link"
                onClick={handleAllNewsClick}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '20px',
                  color: 'var(--text-dark)',
                  textDecoration: 'none'
                }}
              >
                все новости
                <img src="/assets/icons/arrow.png" alt="" aria-hidden="true" />
              </button>
            </div>
            <div className="news-board">
              <figure className="news-board__cover">
                <img src="/assets/images/hero.jpg" alt="Красная площадь" />
              </figure>
              <div className="news-board__list">
                <article className="news-item">
                  <h3>Первая новость</h3>
                  <p>Онлайн квест по старой Риге, что-то такое</p>
                </article>
                <article className="news-item">
                  <h3>Первая новость</h3>
                  <p>Онлайн квест по старой Риге, что-то такое</p>
                </article>
                <article className="news-item">
                  <h3>Первая новость</h3>
                  <p>
                    Онлайн квест по старой Риге, что-то такое. Пупурупурурпуп уркроуоврур Онлайн квест по старой Риге,
                    что-то такое
                  </p>
                </article>
                <article className="news-item">
                  <h3>Первая новость</h3>
                  <p>Онлайн квест по старой Риге, что-то такое</p>
                </article>
                <article className="news-item">
                  <h3>Первая новость</h3>
                  <p>Онлайн квест по старой Риге, что-то такое</p>
                </article>
                <article className="news-item">
                  <h3>Первая новость</h3>
                  <p>
                    Онлайн квест по старой Риге, что-то такое. Пупурупурурпуп Пупурупурурпуп Риге, что-то такое
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;