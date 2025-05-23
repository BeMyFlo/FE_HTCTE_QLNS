// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes/index.js';
import Notification from './components/Notification.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Component */}
        <Navigation />
        <Notification />
        {/* Route */}
        <div className='my-20'>
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;