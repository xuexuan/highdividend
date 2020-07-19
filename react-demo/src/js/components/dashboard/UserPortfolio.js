import React from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default function UserPortfolio(props){
    const columns = [
        {
            Header:"id",
            accessor:"id",
            width:100,
            background:"silver"
          },
        {
            Header:"side",
            accessor:"side",
            width:100,
            background:"silver"
          },    
          {
            Header:"pendingamount",
            accessor:"pendingamount",
            width:100,
            background:"silver"
          },    
          {
            Header:"doneamount",
            accessor:"doneamount",
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
            data={props.portfolio}
            showPagination={false}
            className=".ReactTable"
            style={{
              height: "700px"
            }}
          >
      </ReactTable>)
};