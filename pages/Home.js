import React from 'react';
import dollarsImage from '../assets/dollars.jpg';
import basketballImage from '../assets/basketball.jpg';
import evolutionImage from '../assets/evolution.jpg';

const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="row">
        <div className="col-md-4">
          <img src={dollarsImage} alt="Dollars" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={basketballImage} alt="Basketball" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={evolutionImage} alt="Evolution" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
