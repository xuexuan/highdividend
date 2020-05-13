import React, { Component } from "react";
import ReactDOM from "react-dom";
import GridLayout from 'react-grid-layout';
//import Table from 'react-bootstrap/Table'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class HistDividend extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      eventsdata: []
    };
  }

   fetchEventsdata(){
      var tmp = this.props.symbol;
      var querybymonth = `
            query {
                HistDividends(symbol: "` + tmp + `") 
                {
                  Amount,
                  Date,
                  Type,
                  Data
                }}
            `;
      console.log(querybymonth);

      return this.graphQLFetcher(querybymonth).then(response => {
        console.log(response)
        this.setState({
          eventsdata: response.data.HistDividends
        });
      });
  }

  graphQLFetcher(graphQLParams){
      return fetch('/graphql', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: graphQLParams,}),
        credentials: 'include'
        }).then(function (response) {
            return response.text();
        }).then(function (responseBody) {
            try {
                return JSON.parse(responseBody);
            } catch (error) {
                return responseBody;
            }
        });
  }

  componentDidMount() {
      return this.fetchEventsdata();
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.symbol);
      if (!nextProps.symbol.endsWith(".HK") || nextProps.symbol.length != 7) {
        return false;
      }
      else{
        console.log("start update.");
        this.props.symbol = nextProps.symbol;
        return this.fetchEventsdata();
      }
  }

render(){
  var currMonth = this.props.month;
  const columns = [
    
    {
      Header:"Date",
      accessor:"Date",
      width:100,
      background:"silver"
    },    
    {
      Header:"Type",
      accessor:"Type",
      width:100,
      background:"silver"
    },    
    {
      Header:"Dividend per share",
      accessor:"Data",
      width:200,
      background:"silver"
    }
  ];
  return (
      <ReactTable
        columns={columns}
        data={this.state.eventsdata}
        showPagination={false}
        className=".ReactTable"
        style={{
          height: "350px"
        }}
      >
  </ReactTable>)
}}

export default HistDividend;
