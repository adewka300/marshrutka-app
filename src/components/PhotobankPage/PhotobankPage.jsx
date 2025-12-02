import { useState } from 'react';
import './PhotobankPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PhotobankPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    // Блокируем скролл при открытии модального окна
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    // Восстанавливаем скролл
    document.body.style.overflow = 'auto';
  };

  // Данные фотографий
  const photos = [
    { id: 1, src: "/assets/images/hero.jpg", alt: "Городской фасад", className: "photo-card--tall" },
    { id: 2, src: "/assets/images/hero.jpg", alt: "Ночный бульвар", className: "photo-card--wide" },
    { id: 3, src: "/assets/images/hero.jpg", alt: "Уютное кафе", className: "" },
    { id: 4, src: "/assets/images/hero.jpg", alt: "Витрина ресторана", className: "photo-card--tall" },
    { id: 5, src: "/assets/images/hero.jpg", alt: "Трамвайная улица", className: "" },
    { id: 6, src: "/assets/images/hero.jpg", alt: "Фонари старого города", className: "" },
    { id: 7, src: "/assets/images/hero.jpg", alt: "Архитектура центра", className: "photo-card--wide" },
    { id: 8, src: "/assets/images/hero.jpg", alt: "Ресторанный фасад", className: "" },
    { id: 9, src: "/assets/images/hero.jpg", alt: "Вечерняя Москва", className: "photo-card--tall" },
    { id: 10, src: "/assets/images/hero.jpg", alt: "Дом с аркой", className: "" },
    { id: 11, src: "/assets/images/hero.jpg", alt: "Старый квартал", className: "photo-card--wide" },
    { id: 12, src: "/assets/images/hero.jpg", alt: "Кофейня на углу", className: "" },
    { id: 13, src: "/assets/images/hero.jpg", alt: "Пешеходная зона", className: "" },
    { id: 14, src: "/assets/images/hero.jpg", alt: "Ночная вывеска", className: "photo-card--tall" },
    { id: 15, src: "/assets/images/hero.jpg", alt: "Улица без людей", className: "" },
  ];

  return (
    <div className="page page--photobank">
      <Header pageType="photobank" currentPage="photobank" />
      
      <main>
        <section className="photobank-hero">
          <div className="container">
            <h1>ФОТОБАНК</h1>
            <p>Бесплатные изображения туристических объектов и природы со всей Москвы</p>
          </div>
        </section>

        <section className="photobank-gallery">
          <div className="container photobank-grid">
            {photos.map((photo) => (
              <figure 
                key={photo.id}
                className={`photo-card ${photo.className}`}
                onClick={() => handleImageClick(photo.src)}
              >
                <img src={photo.src} alt={photo.alt} />
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* Модальное окно для полноэкранного просмотра */}
      {selectedImage && (
        <div className="photo-modal" onClick={handleCloseModal}>
          <div className="photo-modal__content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="photo-modal__close"
              onClick={handleCloseModal}
              aria-label="Закрыть"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Полноэкранный просмотр" 
              className="photo-modal__image"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default PhotobankPage;