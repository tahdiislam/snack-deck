import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import AboutMe from './Component/AboutMe';
import Banner from './Component/Banner';
import Services from './Component/Services';
import SomeReviews from './Component/SomeReviews';

const Home = () => {
  // set title 
  useTitle("Home")
    return (
        <div>
          <Banner/>
          <Services/>
          <AboutMe/>
          <SomeReviews/>
          <div className="divider text-4xl font-semibold text-amber-900 mb-8">Offers</div>
        <div className="p-6 py-12 bg-red-400 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter text-gray-50 font-bold">Up to
                <br className="sm:hidden"/>20% Off
              </h2>
              <div className="text-gray-50 space-x-2 text-center py-2 lg:py-0">
                <span>Promo Code:</span>
                <span className="font-bold text-lg">SNACKDECK20%</span>
              </div>
              <Link to="/all-foods" rel="noreferrer noopener"><button className="btn btn-success">Order Now</button></Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Home;