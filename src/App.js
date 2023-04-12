import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Component, useState } from 'react';
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
        <Router>
          <body>
          <div className="main">
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/other" element={<Alert />}></Route>
            </Routes>
          </div>
          </body>
        </Router>

    );
  }
}

function NetworkHistorial() {
  const [dummyData, setData] = useState([
    { DateTime: '03-21-2023', Type: 'Security', Severity: 'High', Protocol: 'UDP', SrcIP: "127.0.0.1", SrcPort: "8080", DestIP: "127.1.1.1", DestPort: "9090", Country: "China" },
    { DateTime: '02-17-2023', Type: 'Security', Severity: 'Low', Protocol: 'TCP', SrcIP: "192.45.24.1", SrcPort: "6774", DestIP: "127.1.1.1", DestPort: "9090", Country: "Czech Republic" },
    { DateTime: '02-01-2023', Type: 'Security', Severity: 'Low', Protocol: 'UDP', SrcIP: "192.34.46.1", SrcPort: "3434", DestIP: "127.1.1.1", DestPort: "9090", Country: "Mexico" },
    { DateTime: '01-29-2023', Type: 'Security', Severity: 'Med', Protocol: 'TCP', SrcIP: "192.73.81.1", SrcPort: "4164", DestIP: "127.1.1.1", DestPort: "9090", Country: "Canada" },
    { DateTime: '01-03-2023', Type: 'Security', Severity: 'High', Protocol: 'UDP', SrcIP: "192.19.37.1", SrcPort: "1064", DestIP: "127.1.1.1", DestPort: "9090", Country: "Brazil" }

  ]);


  return (
    <div class="card mx-2 my-3">
    <h6 class="card-header">
      Network Traffic (Historial)
    </h6>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>DateTime</th>
              <th>Type</th>
              <th>Severity</th>
              <th>Protocol</th>
              <th>SrcIP</th>
              <th>SrcPort</th>
              <th>DestIP</th>
              <th>DestPort</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody id="live-table">
          {dummyData.map((item, index) => (
            <tr key={index}>
              <td>{item.DateTime}</td>
              <td>{item.Type}</td>
              <td>{item.Severity}</td>
              <td>{item.Protocol}</td>
              <td>{item.SrcIP}</td>
              <td>{item.SrcPort}</td>
              <td>{item.DestIP}</td>
              <td>{item.DestPort}</td>
              <td>{item.Country}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}
export default App;
