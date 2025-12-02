import './NewsPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function NewsPage() {
  return (
    <div className="page page--news">
      <Header currentPage="news" />
      
      <main className="page-wrapper">
        <section className="news-hero">
          <div className="news-container">
            <div className="news-hero-title-group">
              <h2 className="news-hero-title font-kankin">НОВОСТИ</h2>
              <p className="news-hero-subtitle">Интересные новости на каждый день!</p>
            </div>
            
            <div className="news-hero-banner">
              <p className="font-kankin">Открытие новых мест и анонсы мероприятий — собрали главные новости для путешественников</p>
            </div>
          </div>
        </section>
        
        <div className="news-content">
          <div className="news-container">
            <div className="news-article-card">
              <div className="news-article-card__image-wrapper">
                <img src="/assets/images/hero.jpg" alt="Туристический объект" className="news-article-card__image" />
              </div>
              <div className="news-article-card__content">
                <h3 className="news-article-card__title font-kankin">Текст текст</h3>
                <p className="news-article-card__text font-kankin">
                  текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст 
                </p>
              </div>
            </div>
            
            <div className="news-article-card news-article-card--reverse">
              <div className="news-article-card__image-wrapper">
                <img src="/assets/images/hero.jpg" alt="Туристический объект" className="news-article-card__image" />
              </div>
              <div className="news-article-card__content">
                <h3 className="news-article-card__title font-kankin">Текст текст</h3>
                <p className="news-article-card__text font-kankin">
                  текст текст текст текст...
                </p>
              </div>
            </div>
            
            <div className="news-article-card">
              <div className="news-article-card__image-wrapper">
                <img src="/assets/images/hero.jpg" alt="Туристический объект" className="news-article-card__image" />
              </div>
              <div className="news-article-card__content">
                <h3 className="news-article-card__title font-kankin">Текст текст</h3>
                <p className="news-article-card__text font-kankin">
                  текст текст текст текст...
                </p>
              </div>
            </div>
            
            <p className="news-page-footer-text font-kankin">Все новости на сегодня. Приходите завтра.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NewsPage;