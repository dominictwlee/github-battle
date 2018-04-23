import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="home-container">
    <h1 className="responsive">Github Battle: Battle your friends...and stuff.</h1>
    <Link className="battle-button" to="/battle">
      Battle
    </Link>
  </main>
);

export default Home;
