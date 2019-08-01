import React from 'react';
import SpinCircle from './../../components/SpinCircle';
import data from './../../datas/data.json';
import './index.css';

const Home = () => {
  const { desc, gitUrl } = data;

  return (
    <div className="home">
      <SpinCircle />
      <h3>{desc}</h3>
      <a href={gitUrl}>前往git地址</a>
    </div>
  );
};

export default Home;
