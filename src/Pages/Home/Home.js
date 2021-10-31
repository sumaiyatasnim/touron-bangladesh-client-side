import React from 'react';
import Banner from './Banner/Banner';
import Offer from './Offers/Offer';
import Services from './Services/Services';
import WhyUs from './WhyChooseUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <Offer></Offer>
        </div>
    );
};

export default Home;