import React from 'react';
import './App.css';
import Home from './components/Home';
import TrackingMap from './components/TrackingMap';
import DeliveryStatus from './components/DeliveryStatus';
import TrackOrder from './components/TrackOrder';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <div className="MainContent">
        <Header/>
        <Home/>
        <TrackingMap />
        <div className="LowerSection">
          <TrackOrder />
          <DeliveryStatus />
        </div>
        <Footer/>
      </div>
  );
}

export default App;
