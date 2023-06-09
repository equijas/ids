
import './LandingPage.css';
import Alert from "./Alert";
import AlertDisplay from "./AlertDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExportButton from "../dashboard/ExportButton";
import AlertStats from "../dashboard/AlertStats";
import IngestConfig from "../dashboard/IngestConfig";
import { Component, useState } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <body>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bg fixed-top">
                <div className="container-fluid">
                    <h5 className="text-white text-center col">Lightweight Intrusion Detection System</h5>
                </div>
            </nav>
            <br/>
            <br/>
            <div className="main">
                <p>This is the landing page for the analyst.</p>
                <p>From here, analysts will see various data points, including config files, current traffic, and
                    alerts.</p>


                <div className="row">
                    <div className="column">
                        <p>Alert Test</p>
                        <p>This is an experimental 'pop-up' version of the alerts</p>
                        <br/>
                        <Alert/>
                    </div>
                    <div className="divider">

                    </div>
                    <div className="column">
                        <h2>
                            Dashboard Section
                        </h2>
                        <div><ExportButton/></div>
                        <div><AlertStats/></div>
                        <div><IngestConfig/></div>
                        <div>?</div>
                    </div>
                </div>
                <br/>
                <br/>

                <NetworkHistorial/>

            </div>
            </body>
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
export default LandingPage;
