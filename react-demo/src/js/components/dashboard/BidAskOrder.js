import React from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default function BidAskOrder(props){
    const columns = [
        {
            Header:"side",
            accessor:"side",
            width:100,
            background:"silver"
          },    
          {
            Header:"amount",
            accessor:"amount",
            width:100,
            background:"silver"
          },
          {
            Header:"price",
            accessor:"price",
            width:100,
            background:"silver"
          },
          {
            Header:"status",
            accessor:"status",
            width:100,
            background:"silver"
          }
      ];

      return (
          <ReactTable
            columns={columns}
            data={props.orders}
            showPagination={false}
            className=".ReactTable"
            style={{
              height: "700px"
            }}
          >
      </ReactTable>)
};