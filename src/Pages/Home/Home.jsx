import React from 'react';
import AboutMe from './Component/AboutMe';
import Banner from './Component/Banner';
import Services from './Component/Services';
import SomeReviews from './Component/SomeReviews';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Services/>
          <AboutMe/>
          <SomeReviews/>
        </div>
    );
};

export default Home;