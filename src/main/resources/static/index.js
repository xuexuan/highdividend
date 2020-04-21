//export function test(myHeading)
//{
//    let myName = prompt('Please enter your name.');
//    localStorage.setItem('name', myName);
//    myHeading.textContent = 'Mozilla is cool, ' + myName;
//}

const queryxx = `
query {
    Equities(month: "Jul") 
    {
      Symbol,
      Fiftytwoweekhigh,
      Fiftytwoweeklow,
      ExDividenddate,
      Payoutratio,
      Fwddividendyield
    }}
`;
const url = "http://localhost:8080/graphiql";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ queryxx })
};

function graphQLFetcher(graphQLParams, urlParam) {
        // This example expects a GraphQL server at the path /graphql.
        // Change this to point wherever you host your GraphQL server.
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

function sortByProperty(){  
   return function(a,b){  
	  a_yield = parseFloat(a["Forward Annual Dividend Yield"].strip("%"));
	  b_yield = parseFloat(b["Forward Annual Dividend Yield"].strip("%"));
      if(a_yield > b_yield)  
         return 1;  
      else if(a_yield < b_yield)  
         return -1;  
  
      return 0;  
   }  
}


    function tableCreate(equity_json) {
        //body reference 
        var body = document.getElementsByTagName("body")[0];
      
        // create elements <table> and a <tbody>
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
      
        headrow = document.createElement("tr");
        var headString = ["Symbol", "52 Week High", "52 Week Low", "Ex-Dividend Date", "Payout Ratio","Forward Annual Dividend Yield"];
        for (var i = 0; i < 6; ++i) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(headString[i]);
            cell.appendChild(cellText);
            headrow.appendChild(cell);
        }
        tblBody.appendChild(headrow);

		let equitydata = equity_json.data.Equities;
		equitydata.sort(function(a,b){  
	  a_yield = parseFloat(a.Fwddividendyield.replace("%",""));
	  b_yield = parseFloat(b.Fwddividendyield.replace("%", ""));
      if(a_yield > b_yield)  
         return -1;  
      else if(a_yield < b_yield)  
         return 1;  
  
      return 0;  
   }  );
        for (var i = 0; i < equitydata.length; ++i)
        {
            var row = document.createElement("tr");
            for(var k in equitydata[i])
            {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(equitydata[i][k]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
      
        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute("border", "2");
      }

  //let myButton = document.querySelector('button');
  graphQLFetcher(queryxx, url).then(function(results){
    tableCreate(results);
});
