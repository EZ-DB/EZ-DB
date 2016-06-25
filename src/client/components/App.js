import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Link to="/home">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
