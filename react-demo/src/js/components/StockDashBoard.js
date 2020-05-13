import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from './dashboard/dashboard';


class StockDashBoard extends Component {
    render() {
        return(<Dashboard/>)
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<StockDashBoard />, wrapper) : false;