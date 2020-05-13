import React, { Component } from "react";
//import ReactDOM from "react-dom";
import GridLayout from 'react-grid-layout';
import Table from 'react-bootstrap/Table'
import TableForMonth from "./TableCustom"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import HistDividend from "./HistDividends"

class MyFirstGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const layout = [
      {i: 'a', x: 400, y: 0, w: 12, h: 12},
      {i: 'b', x: 400, y: 0, w: 12, h: 12},
     
    ];
    return (
      <GridLayout className=".react-grid-item" layout={layout} cols={2} rowHeight={25} width={2000}>
        <div key="a">
          <Grid item xs={8}>
                <Paper className={this.props.paper}>
                    <TableForMonth month="Apr"/>
                </Paper>
          </Grid>
        </div>
        <div key="b">
          <Grid item xs={8}>
                <Paper className={this.props.paper}>
                    <HistDividend month="May"/>
                </Paper>
          </Grid>
        </div>
      </GridLayout>
    )
  }
}

export default MyFirstGrid;

//const wrapper = document.getElementById("container");
//wrapper ? ReactDOM.render(<MyFirstGrid />, wrapper) : false;
