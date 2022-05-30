import React from 'react';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import Seminars from './components/Seminars';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const HomePage = () => {
  return <>
    <Menu />
    <Banner />
    <Introduction />
    <Seminars />
    <Timeline />
    <Footer />
  </>;
};

export default HomePage;