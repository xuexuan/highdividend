import React from 'react';
import { Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { FormLabel } from '@material-ui/core';
import UserPortfolio from './UserPortfolio';
import BidAskOrder from './BidAskOrder';
import OrderInput from './OrderInput';

class OrderManagement extends Component{
    
    constructor(props){
        super(props);
        var ws;
        props.url = 'ws://3.22.51.143:8080/demo/basecoin/';
        this.state = {orders:[]};
        this.state={price:'here is price'};
        this.state={portfolio:[]};
        this.messagefun = this.messagefun.bind(this);
        this.sendOrder = this.sendOrder.bind(this);
    }

    componentWillUnmount(){
        console.log("orderbookmanagement will unmount");
        //if (this.props.ws.readyState == WebSocket.CONNECTING)
        {
            this.ws.onclose();
            this.ws = null;
        }
    }

    sendOrder(e){
        //if (this.props.ws.readyState == WebSocket.CONNECTING)
            console.log("json message: "+ e);
            this.ws.send(e);
        }

    connectfun() {
        console.log('connect');
    };

    messagefun(e){
        console.log(e);
        if (e.data != null)
        {
            var data = JSON.parse(e.data);
            console.log(data);
            if (e.data.length < 10)
                this.setState({price: data});
            else
            {
                if (e.data.includes("doneamount"))
                    this.setState({portfolio: data});
                else if (e.data.includes("total_amount")){}
                else
                    this.setState({orders: data});
            }
        }
    }

    closefun(){
        console.log('close');
    }

    errorfun(){
        console.log('error');
    }

    componentDidMount()
    {
        console.log("orderbookmanagement didamount");
        //if (this.props.ws.readyState != WebSocket.CONNECTING)
        {
            if (this.props.username.trim().length == 0)
            this.props.url = '';
            else
                this.props.url = this.props.url + this.props.username;

            console.log("url "+ this.props.url);
            if (this.props.url.length != 0)
            {
                this.ws = new WebSocket(this.props.url);
                this.ws.onopen = this.connectfun;
                this.ws.onmessage = this.messagefun;
                this.ws.onerror = this.errorfun;
                this.ws.onclose = this.closefun;
                this.ws.binaryType = 'arraybuffer';
            }
        }
    }

    render(){
        
        const useStyles = makeStyles((theme) => ({
            paper: {
                padding: theme.spacing(4),
                display: 'flex',
                overflow: 'auto',
                flexDirection: 'column',
            },
            }));
    
        return (
                <Grid container spacing={3}>
                    <Grid container justify="center" item xs={10} spacing={2}>
                        <Grid item xs={10}>
                            <Paper className={useStyles.paper}>
                                <OrderInput sendMessage={this.sendOrder}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" item xs={10} spacing={2}>
                        <Grid item xs={10}>
                            <form>
                                <label>coin price: {this.state.price}</label>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid container  justify="center" item xs={10} spacing={2}>
                        <Grid item xs={10}>
                            <FormLabel>{this.state.price}</FormLabel>
                            <Paper className={useStyles.paper}>
                                <BidAskOrder orders={this.state.orders}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" item xs={10} spacing={2}>
                        <Grid item xs={10}>
                            <Paper className={useStyles.paper}>
                                <UserPortfolio portfolio={this.state.portfolio}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>);
    }
}

export default OrderManagement;