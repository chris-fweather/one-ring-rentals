import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation
import './RegionsShowcase.css';

/**
 * Array of regions to display in the Regions Showcase section.
 * Each region contains an ID, city, location, image URL, and a link.
 */
const regions = [
  { id: 1, city: 'Sydney', location: 'New South Wales', imageUrl: 'https://place-hold.it/400', link: '/regions' },
  { id: 2, city: 'Melbourne', location: 'Victoria', imageUrl: 'https://place-hold.it/400', link: '/regions' },
  { id: 3, city: 'Brisbane', location: 'Queensland', imageUrl: 'https://place-hold.it/400', link: '/regions' },
  { id: 4, city: 'Perth', location: 'Western Australia', imageUrl: 'https://place-hold.it/400', link: '/regions' },
  { id: 5, city: 'Adelaide', location: 'South Australia', imageUrl: 'https://place-hold.it/400', link: '/regions' },
  { id: 6, city: 'Hobart', location: 'Tasmania', imageUrl: 'https://place-hold.it/400', link: '/regions' }
  // Add more regions as needed
];

/**
 * RegionsShowcase component that renders a list of regions as cards.
 * Each region card is clickable and links to more detailed region information.
 * 
 * @returns {JSX.Element} - The rendered RegionsShowcase component
 */
const RegionsShowcase = () => {
  return (
    <section className="regions-showcase">
      <h2>EXPLORE REGIONS</h2>
      <div className="container">
        <div className="regions-grid">
          {regions.map((region) => (
            <Link to={region.link} key={region.id} className="region-card">  
              {/* Display each region with an image and overlay */}
              <div className="region-image" style={{ backgroundImage: `url(${region.imageUrl})` }}>
                <div className="region-overlay">
                  <h3>{region.city}</h3>
                  <p>{region.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsShowcase;
