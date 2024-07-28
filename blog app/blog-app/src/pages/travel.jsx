import React from 'react';
import './Travel.css';
import CardColumn from '../components/CardColumn';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Travel = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <main className="main-container" >
        <CardColumn/>
        <CardColumn/>
        <CardColumn className="last-column"/>
      </main>
    </>
  );
};

export default Travel;
