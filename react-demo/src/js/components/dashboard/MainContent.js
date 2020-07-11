import React from 'react';
import { Component } from "react";
import HistDividend from "./HistDividends"
import Mkdataboard from './marketdataboard';

class MainWidget extends Component
{
    constructor(props){
        super(props);
        
    }


    render(){
        console.log(this.props.tabname);
        if (this.props.tabname == 'orderbook')
        {
            return(
                <HistDividend/>
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