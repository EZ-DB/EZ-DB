import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const LandingImage = () => (
  <div>
    <div className="home-image" id="home">
      <div className="content">
        <h1>Fit Together</h1>
        <h3>Breathe Deep, Be Active, Stay Connected</h3>
        <button className="big-button" onClick={() => browserHistory.push('/dashboard')}>Demo
        </button>
      </div>
    </div>
    <div className="about" id="about">
      <div className="content">
        <h1>Are you Ready To Get Fit Together?</h1>
      </div>
      <div className="row">
        <div className="about-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Stats Icon" />
          </div>
          <div>
            <h3>Log & View your health statistics</h3>
          </div>
        </div>
        <div className="about-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Teams Icon" />
          </div>
          <div>
            <h3>Interact with teams in your area</h3>
          </div>
        </div>
        <div className="about-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Health Icon" />
          </div>
          <div>
            <h3>Gain knowledge on health topics</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="section" id="section1">
      <div className="content">
        <h1>Something Interesting</h1>
      </div>
      <div className="row">
        <div className="section-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="section-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="section-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="footer" id="section2">
      <div className="content">
        <h1>Something Else Interesting</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat arcu quam, vitae porta erat mollis et. Pellentesque vitae libero lacinia, tempus ante sit amet, tristique ante. Vivamus a gravida arcu, in ullamcorper lacus. Donec non ante malesuada, elementum diam eu, bibendum felis. Nam lacinia elit orci, et semper diam condimentum ut. Duis arcu dolor, pharetra vel dignissim eu, aliquam ut arcu. Fusce eget auctor purus. Sed sit amet cursus dui.</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="footer-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Something Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
        <div className="footer-info col-md-4">
          <div>
            <img className="icon" src="images/run.png" alt="Health Icon" />
          </div>
          <div>
            <h3>Something</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingImage;

    // <div className="text-box">
    //   <div className="inner-text-box">
    //     <h5 className="home-text-small">Breathe Deep, Be Active, Stay Connected</h5>
    //     <h2 className="home-text-large">GET FIT TOGETHER</h2>
    //   </div>
    // </div>
