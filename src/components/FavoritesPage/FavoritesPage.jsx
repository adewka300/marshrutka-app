import { useEffect } from 'react';
import './FavoritesPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function FavoritesPage() {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  return (
    <div className="page page--favorites">
      <Header currentPage="favorites" />
      
      <main>
        <section className="favorites-hero">
          <div className="container">
            <h1 className="favorites-title">ИЗБРАННОЕ</h1>
            <p className="favorites-subtitle">Здесь собраны ваши любимые маршруты</p>
          </div>
        </section>

        <section className="favorites-content">
          <div className="container">
            <div className="favorites-section">
              <h2>Избранные маршруты</h2>
              <div className="favorites-grid">
                <div className="favorite-card">
                  <img src="https://placehold.co/400x300/35281f/ffffff?text=Маршрут+1" alt="Избранный маршрут" />
                  <div className="favorite-card-content">
                    <h3>Ночная Москва</h3>
                    <p>Вечерняя прогулка по освещенным улицам столицы</p>
                    <button className="button button--outline">Удалить из избранного</button>
                  </div>
                </div>
                
                <div className="favorite-card">
                  <img src="https://placehold.co/400x300/4a3b32/ffffff?text=Маршрут+2" alt="Избранный маршрут" />
                  <div className="favorite-card-content">
                    <h3>Архитектурный тур</h3>
                    <p>Знакомство с исторической архитектурой Москвы</p>
                    <button className="button button--outline">Удалить из избранного</button>
                  </div>
                </div>
                
                <div className="favorite-card">
                  <img src="https://placehold.co/400x300/3b2a21/ffffff?text=Маршрут+3" alt="Избранный маршрут" />
                  <div className="favorite-card-content">
                    <h3>Гастрономический тур</h3>
                    <p>Лучшие рестораны и кафе города</p>
                    <button className="button button--outline">Удалить из избранного</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesPage;