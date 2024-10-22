import React from 'react';
import './FeaturedProperties.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';

/**
 * FeaturedProperties component displays a list of featured rental properties
 * in a grid layout. Each property includes an image, title, location, price, 
 * number of bedrooms, and number of bathrooms.
 * 
 * @returns {JSX.Element} - The rendered featured properties section
 */
const FeaturedProperties = () => {
  // Array of property objects to display
  const properties = [
    {
      id: 1,
      imageUrl: 'https://place-hold.it/400',
      title: 'Luxury Apartment with great views',
      location: 'Upper East Side, New York',
      price: 950,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 2,
      imageUrl: 'https://place-hold.it/400',
      title: 'Stunning Villa with 5 bedrooms',
      location: 'Miami Beach, Florida',
      price: 300,
      bedrooms: 5,
      bathrooms: 2,
    },
    {
      id: 3,
      imageUrl: 'https://place-hold.it/400',
      title: 'Modern construction with parking space',
      location: 'Midtown, New York',
      price: 850,
      bedrooms: 1,
      bathrooms: 2,
    },
    {
      id: 4,
      imageUrl: 'https://place-hold.it/400',
      title: 'Cozy Cabin in the Mountains',
      location: 'Aspen, Colorado',
      price: 450,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 5,
      imageUrl: 'https://place-hold.it/400',
      title: 'Beachfront Condo with Ocean View',
      location: 'Santa Monica, California',
      price: 700,
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      id: 6,
      imageUrl: 'https://place-hold.it/400',
      title: 'Spacious Loft in Downtown',
      location: 'Chicago, Illinois',
      price: 600,
      bedrooms: 2,
      bathrooms: 1,
    }
    // Add more properties as needed
  ];

  return (
    <section className="featured-properties">
      <h2>FEATURED PROPERTIES</h2>
      <div className="container">
        <div className="properties-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              {/* Image section with price badge and overlay */}
              <div className="property-image" style={{ backgroundImage: `url(${property.imageUrl})` }}>
                <div className="price-badge">
                  <span className="price-badge--price">${property.price}</span>
                  <span className="price-badge--per">PER NIGHT</span>
                </div>
                <div className="property-overlay">
                  <h3>{property.title}</h3>
                  <p>{property.location}</p>
                </div>
              </div>

              {/* Property details (bedrooms and bathrooms) */}
              <div className="property-details">
                <span>
                  <FontAwesomeIcon icon={faBed} /> {property.bedrooms}
                </span>
                <span>
                  <FontAwesomeIcon icon={faBath} /> {property.bathrooms}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
