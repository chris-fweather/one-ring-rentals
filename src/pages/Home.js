import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import SearchBar from '../components/SearchBar/SearchBar';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties';
import Footer from '../components/Footer/Footer';

const Home = () => (
  <>
    <Header />
    <Carousel />
    <SearchBar />
    <FeaturedProperties />
    <Footer />
  </>
);

export default Home;
