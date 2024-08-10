import React from 'react';
import './DeliveryStatus.css';

function DeliveryStatus() {
  return (
    <div className="DeliveryStatus">
      <h2>Delivery Status</h2>
      <div className="StatusDetails">
        <p>Drone Model: XYZ123</p>
        <p>Battery Life: 85%</p>
        <p>ETA: 15 minutes</p>
      </div>
    </div>
  );
}

export default DeliveryStatus;
