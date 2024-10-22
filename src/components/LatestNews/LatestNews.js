import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './LatestNews.css';

/**
 * Array of news items to display in the Latest News section.
 * Each news item contains an ID, title, text, author, date, image URL, and link.
 */
const newsItems = [
  {
    id: 1,
    title: 'New Rental Regulations Announced',
    text: 'The government has announced new rental regulations effective from next month. Find out how this impacts you.',
    author: 'Admin',
    date: '2024-08-08',
    imageUrl: 'https://place-hold.it/400',
    link: '/news'
  },
  {
    id: 2,
    title: 'Top 10 Rental Properties in Sydney',
    text: 'Explore our list of the top 10 rental properties in Sydney for the month of August.',
    author: 'Admin',
    date: '2024-08-07',
    imageUrl: 'https://place-hold.it/400',
    link: '/news'
  },
  {
    id: 3,
    title: 'Customer Stories: Finding the Perfect Home',
    text: 'Read our customer stories about their journey to finding the perfect home through One Ring Rentals.',
    author: 'Admin',
    date: '2024-08-06',
    imageUrl: 'https://place-hold.it/400',
    link: '/news'
  }
  // Add more news articles as needed
];

/**
 * LatestNews component that renders a list of news items.
 * Each news item is displayed as a clickable card, which links to the full article.
 * 
 * @returns {JSX.Element} - The rendered LatestNews component
 */
const LatestNews = () => {
  return (
    <section className="latest-news">
      <h2>LATEST NEWS</h2>
      <div className="container">
        <div className="news-grid">
          {newsItems.map((news) => (
            <Link to={news.link} key={news.id} className="news-card">  
              {/* Display each news item with an image and overlay */}
              <div className="news-image" style={{ backgroundImage: `url(${news.imageUrl})` }}>
                <div className="news-overlay">
                  <h3>{news.title}</h3>
                  <p>{news.text}</p>
                </div>
              </div>
              
              {/* News details section displaying author and date */}
              <div className="news-details">
                <span className="author">
                  <i className="fa fa-user"></i> {news.author}
                </span>
                <span className="date">
                  <i className="fa fa-clock-o"></i> {news.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
