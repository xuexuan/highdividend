import React, { Component } from "react";
import ReactDOM from "react-dom";
import GridLayout from 'react-grid-layout';
//import Table from 'react-bootstrap/Table'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class TableForMonth extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      equitydata: []
    };
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
    var tmp = this.props.month;
    var querybymonth = `
          query {
              Equities(month: "` + tmp + `") 
              {
                Symbol,
                Fiftytwoweekhigh,
                Fiftytwoweeklow,
                ExDividenddate,
                Payoutratio,
                Fwddividendyield
              }}
          `;
    console.log(querybymonth);

    this.graphQLFetcher(querybymonth).then(function(results){
      var equityresult = results.data.Equities;
      equityresult.sort(function(a,b){  
                        var a_yield = parseFloat(a.Fwddividendyield.replace("%",""));
                        var b_yield = parseFloat(b.Fwddividendyield.replace("%", ""));
                          if(a_yield > b_yield)  
                            return -1;  
                          else if(a_yield < b_yield)  
                            return 1;  
                      
                          return 0;  
                      });
      return equityresult;
    }).then(response => {
      this.setState({
        equitydata: response
      });
    });
    /*this.graphQLFetcher(querybymonth).then(function(results){
      var equityresult = results.data.Equities;
      equityresult.sort(function(a,b){  
                        var a_yield = parseFloat(a.Fwddividendyield.replace("%",""));
                        var b_yield = parseFloat(b.Fwddividendyield.replace("%", ""));
                          if(a_yield > b_yield)  
                            return -1;  
                          else if(a_yield < b_yield)  
                            return 1;  
                      
                          return 0;  
                      });
      return equityresult;
    }).then(response => {
      this.setState({
        equitydata: response
      });
    });*/
    
  }
/*
  render(){
        var keys = ["Symbol", "52 Week High", "52 Week Low", "Ex-Dividend Date", "Payout Ratio","Forward Annual Dividend Yield"];
        var edata = this.state.equitydata;
        console.log(edata);
        return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {
                keys.map(function (key_) {
                  return <th>{key_}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              edata.map(function (e_){
                return <tr>
                  {
                    Object.keys(e_).map(function (k, i){
                    return <td>{e_[k]}</td>
                    })
                  }
                  </tr>
              })
            }
          </tbody>
      </Table>)
}}*/

render(){

  const columns = [
    {
      Header:"Symbol",
      accessor:"Symbol",
      width:100,
      background:"silver"
    },
    {
      Header:"52 Week High",
      accessor:"Fiftytwoweekhigh",
      width:100,
      background:"silver"
    },
    {
      Header:"52 Week Low",
      accessor:"Fiftytwoweeklow",
      width:100,
      background:"silver"
    },    
    {
      Header:"Ex-Dividend Date",
      accessor:"ExDividenddate",
      width:200,
      background:"silver"
    },    
    {
      Header:"Payout Ratio",
      accessor:"Payoutratio",
      width:100,
      background:"silver"
    },
    {
      Header:"Forward Annual Dividend Yield",
      accessor:"Fwddividendyield",
      width:300,
      background:"silver"
    }
  ];
  return (
      <ReactTable
        columns={columns}
        data={this.state.equitydata}
        showPagination={false}
        className=".ReactTable"
        style={{
          height: "350px"
        }}
      >
  </ReactTable>)
}}

export default TableForMonth;
