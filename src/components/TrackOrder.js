import React from 'react';
import './TrackOrder.css';

function TrackOrder() {
  return (
    <div className="TrackOrder">
      <h2>Track Order</h2>
      <div className="DroneImageContainer">
        <img src="/images/drone.jpg" alt="Drone" className="DroneImage" />
      </div>
      <div className="OrderDetails">
        <h3>Order #12345</h3>
        <p>Status: In Transit</p>
        <p>ETA: 15 minutes</p>
        <p>Drone Model: XYZ123</p>
      </div>
    </div>
  );
}

export default TrackOrder;
