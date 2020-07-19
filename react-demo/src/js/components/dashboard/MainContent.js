import React from 'react';
import { Component } from "react";
import HistDividend from "./HistDividends"
import Mkdataboard from './marketdataboard';
import OrderManagement from './OrderManagement';

class MainWidget extends Component
{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.tabname);
        if (this.props.tabname == 'Trading')
        {
            return(
                <OrderManagement  username={this.props.username}/>
            );
        }
        else
        {
            return(
                <Mkdataboard/>
            );
        }
    }
}

export default MainWidget;