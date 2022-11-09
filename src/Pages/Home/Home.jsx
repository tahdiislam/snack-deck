import React from 'react';
import AboutMe from './Component/AboutMe';
import Banner from './Component/Banner';
import Services from './Component/Services';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Services/>
          <AboutMe/>
        </div>
    );
};

export default Home;