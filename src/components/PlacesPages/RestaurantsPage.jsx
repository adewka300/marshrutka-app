import { useEffect } from 'react';
import './PlacesPages.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function RestaurantsPage() {
  // Прокрутка страницы вверх при монтировании компонента
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page page--places">
      <Header currentPage="places" />
      
      <main>
        <section className="places-hero">
          <div className="container">
            <h1 className="places-title">Рестораны</h1>
            <p className="places-subtitle">Посетите наш театр замечательный такой</p>
          </div>
        </section>

        <section className="places-content">
          <div className="container">
            <div className="places-description">
              <h2>О ресторанах Москвы</h2>
              <p>Текстовая заглушка о ресторанах Москвы. Здесь будет подробная информация о гастрономических заведениях столицы, их кухне, атмосфере и особенностях.</p>
              
              <div className="places-details">
                <h3>Дополнительная информация</h3>
                <p>Заглушка текста о ресторанах. Этот текст можно заменить на реальное описание когда оно появится.</p>
                <p>Еще один абзац текстовой заглушки для наполнения страницы.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RestaurantsPage;