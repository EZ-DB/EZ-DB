import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import LandingImage from './LandingImage';

const Home = (props) => (
  <div>
    <HomeNavBar />
    <LoginModal />
    <SignupModal addUser={props.addUser} />
    <LandingImage />
  </div>
);

Home.propTypes = {
  addUser: React.PropTypes.func,
};

export default Home;
