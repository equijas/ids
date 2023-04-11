import React, { Component } from "react";
import {Link} from "react-router-dom"; 
import './Alert.css';
import AlertDisplay from "./AlertDisplay";
import { Button } from "react-bootstrap";


class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertVisible: false,
            buttonText: 'Test Alert'
        };
        this.displayAlert = this.displayAlert.bind(this);
    }

    render() {
        return ( 
            <div>
                <Button id="bttn" onClick={this.displayAlert}>
                    {this.state.alertVisible ? 'Hide Alert' : 'Test Alert'}
                </Button>

                <div id="alertDiv" className="alert">
                    {generateAlert()}
                </div>
            </div>
        );
    }

    displayAlert() {
        console.log("alert displaying")
        this.setState(prevState => ({
            alertVisible: !prevState.alertVisible,
            buttonText: prevState.alertVisible ? 'Test Alert' : 'Hide Alert'
        }));
        const alertDiv = document.getElementById("alertDiv");

        if (alertDiv.style.display == "none") {
            alertDiv.style.display = "block";
        } else {
            alertDiv.style.display = "none"
        }
    }
}


function generateAlert() {

    // Sample data for pop-up alert
    var sourceNetwork = "192.168.0.0/16";
    var sourceIPAddress = "192.168.0.1";
    var destinationIPAddress = "8.8.8.8";
    var dateTime = "2023-04-09 12:34:56";
    var type = "Warning";

    return (
        <div>
             <AlertDisplay 
                sourceNetwork="Network A" 
                sourceIP="192.168.1.1" 
                destinationIP="192.168.1.2" 
                dateTime="2023-04-09 14:30:00" 
                alertType="Security Alert" 
                />
        </div>

    );
}


export default Alert;