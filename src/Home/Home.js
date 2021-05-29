import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SportCard from '../SportCard/SportCard';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <SportCard></SportCard>
        </div>
    );
};

export default Home;