import React, { useState } from 'react';
import './Carousel.css';

/**
 * Carousel component displays a set of slides, each containing 
 * an image, a title, a subtitle, and a button. Users can navigate 
 * between slides using previous and next arrows.
 * 
 * @returns {JSX.Element} - The rendered carousel component
 */
const Carousel = () => {
  // State to track the currently displayed slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide objects, each containing image, title, subtitle, and button info
  const slides = [
    {
      imageUrl: '', 
      title: 'Breathtaking views',
      subtitle: 'Relaxation in the Bay of Belfalas',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      imageUrl: '', 
      title: 'The simple life',
      subtitle: 'Lush gardens in Mordor',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    // Add more slides as needed
  ];

  // Move to the next slide; if at the last slide, loop back to the first
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Move to the previous slide; if at the first slide, loop to the last
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${slides[currentSlide].imageUrl})`,
      }}
    >
      <div className="carousel-content">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].subtitle}</p>
        <button className="learn-more-btn">{slides[currentSlide].buttonText}</button>
      </div>

      <div className="carousel-navigation">
        {/* Button to move to the previous slide */}
        <button className="prev-arrow" onClick={prevSlide}>
          &#10094;
        </button>

        {/* Button to move to the next slide */}
        <button className="next-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
