import React from 'react';
import '../App.css';
import {Alert, Button} from "react-bootstrap";
import {Link, Route, Routes, useNavigate} from "react-router-dom";


function AlertStats() {

  let navigate = useNavigate();
  const changePath = () => {
    let path = 'other';
    navigate(path);
  }

  return (
    <div className="App">
      <Button onClick={changePath}>
        Alert Stats
      </Button>
    </div>
  );
}

export default AlertStats;