import React, { Component } from "react";
import ReactDOM from "react-dom";
import GridLayout from 'react-grid-layout';
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import Table from 'react-bootstrap/Table'
import TableForMonth from "./TableCustom"

class MyFirstGrid extends Component {
  render() {
  

    const layout = [
      {i: 'a', x: 0, y: 0, w: 6, h: 12},
      {i: 'b', x: 7, y: 0, w: 6, h: 12},
      {i: 'c', x: 14, y: 0, w: 6, h: 12},
      {i: 'd', x: 0, y: 0, w: 6, h: 12},
      {i: 'e', x: 7, y: 0, w: 6, h: 12},
      {i: 'f', x: 14, y: 0, w: 6, h: 12},
      {i: 'g', x: 0, y: 0, w: 6, h: 12},
      {i: 'h', x: 7, y: 0, w: 6, h: 12},
      {i: 'i', x: 14, y: 0, w: 6, h: 12},
    ];
    return (
      <GridLayout className=".react-grid-item" layout={layout} cols={12} rowHeight={25} width={1200}>
        <div key="a"><TableForMonth month="Apr"/></div>
        <div key="b"><TableForMonth month="May"/></div>
        <div key="c"><TableForMonth month="Jun"/></div>
        <div key="d"><TableForMonth month="Jul"/></div>
        <div key="e"><TableForMonth month="Aug"/></div>
        <div key="f"><TableForMonth month="Sep"/></div>
        <div key="g"><TableForMonth month="Oct"/></div>
        <div key="h"><TableForMonth month="Nov"/></div>
        <div key="i"><TableForMonth month="Dec"/></div>
      </GridLayout>
    )
  }
}

export default MyFirstGrid;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MyFirstGrid />, wrapper) : false;
