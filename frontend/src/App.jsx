import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
