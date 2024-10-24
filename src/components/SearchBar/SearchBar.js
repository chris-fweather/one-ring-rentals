import React from 'react';
import './SearchBar.css';

/**
 * SearchBar component that renders a search form for rental properties.
 * The form includes fields for arrival date, stay duration, number of bedrooms, and location.
 * 
 * @returns {JSX.Element} - The rendered SearchBar component
 */
const SearchBar = () => (
  <div className="search-bar">
    <form>
      {/* Arrival Date Field */}
      <div className="form-group">
        <input type="date" id="arrival-date" name="arrival-date" placeholder="Arrive on..." />
      </div>

      {/* Stay Duration Dropdown */}
      <div className="form-group">
        <select id="stay-duration" name="stay-duration">
          <option value="">Nights</option>
          <option value="1">1 Night</option>
          {/* Additional options can be added here */}
        </select>
      </div>

      {/* Bedrooms Dropdown */}
      <div className="form-group">
        <select id="bedrooms" name="bedrooms">
          <option value="">Bedrooms</option>
          <option value="1">1 Bedroom</option>
          {/* Additional options can be added here */}
        </select>
      </div>

      {/* Location Input Field */}
      <div className="form-group">
        <input type="text" id="location" name="location" placeholder="City, State, Country, etc.." />
      </div>

      {/* Submit Button */}
      <button type="submit">Search</button>
    </form>
  </div>
);

export default SearchBar;
