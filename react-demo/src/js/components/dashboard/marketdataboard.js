import React from 'react';
import { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import TableForMonth from "./TableCustom"
import HistDividend from "./HistDividends"



export default function Mkdataboard()
{
        const useStyles = makeStyles((theme) => ({
            paper: {
                padding: theme.spacing(4),
                display: 'flex',
                overflow: 'auto',
                flexDirection: 'column',
            },
            }));
    
            const [equitySymbol,setEquitySymbol] = React.useState("0005.HK");
            const handleChange = event => {
                    setEquitySymbol(event.target.value);
            };



        return(
            <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={useStyles.paper}>
                        <TableForMonth month="Jul"/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={useStyles.paper}>
                    <TextField
                        id="standard-select-stock"
                        label="Historical dividend"
                        value={equitySymbol}
                        onChange={handleChange}/>
                        <HistDividend symbol={equitySymbol}/>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        );
}

//export default marketdataboard;