import React from 'react';
import './AlertDisplay.css';

function AlertDisplay({ sourceNetwork, sourceIP, destinationIP, dateTime, alertType }) {
  return (
    <div className="alert-display">
      <div className="alert-column">Network: {sourceNetwork}</div>
      <div className="alert-column">Source: {sourceIP}</div>
      <div className="alert-column">Dest: {destinationIP}</div>
      <div className="alert-column">DT: {dateTime}</div>
      <div className="alert-column">Type: {alertType}</div>
    </div>
  );
}

export default AlertDisplay;
