import React from 'react';
import NavDesktop from './Header/NavDesktop';
import NavMobile from './Header/NavMobile';
import TitleHeader from './Header/TitleHeader';


import 'swiper/css';

const Home = () => {
    return (
        <div>
            <NavDesktop />
            <NavMobile />
            <TitleHeader />
        </div>
    );
};

export default Home;
