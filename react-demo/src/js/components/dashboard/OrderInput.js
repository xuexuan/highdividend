import React from 'react';
import { Component } from "react";
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

class OrderInput extends Component{

    constructor(props){
        super(props);
        // const [amount, setAmount] = React.useState('100');
        // const [price, setPrice] = React.useState('100');
        // const [side, setSide] = React.useState('buy');
        this.state={amount:100};
        this.state={price:100};
        this.sendBuyMessage = this.sendBuyMessage.bind(this);
        this.sendSellMessage = this.sendSellMessage.bind(this);
        this.generateGuid = this.generateGuid.bind(this);
    }

    generateGuid() {
        var result, i, j;
        result = '';
        for(j=0; j<32; j++) {
          if( j == 8 || j == 12 || j == 16 || j == 20) 
            result = result + '-';
          i = Math.floor(Math.random()*16).toString(16).toUpperCase();
          result = result + i;
        }
        return result;
      }

    sendBuyMessage(e){
        //constrcut json with timestamp and tradeid and status
        //{"status":"pending","price":"96","amount":"100","side":"buy","unixtimestamp":"123456","id":"4"}
        var _date = new Date().getTime();
        var _unixtime = Math.round(_date / 1000);
        var _price = this.state.price;
        var _amount = this.state.amount;
        var _id = this.generateGuid();
        var  order = {status:"pending", price:_price, amount:_amount, side:"buy", unixtimestamp:_unixtime, id:_id};
        this.props.sendMessage(JSON.stringify(order));
    }

    sendSellMessage(){
        //constrcut json with timestamp and tradeid and status
        var _date = new Date().getTime();
        var _unixtime = Math.round(_date / 1000);
        var _price = this.state.price;
        var _amount = this.state.amount;
        var _id = this.generateGuid();
        var  order = {status:"pending", price:_price, amount:_amount, side:"sell", unixtimestamp:_unixtime, id:_id};
        this.props.sendMessage(JSON.stringify(order));
    }

    render(){
        const setAmount= event=>{this.setState({amount: event.target.value})};
        const setPrice = event=>{this.setState({price: event.target.value})};
        return(
            <div>
                <label mx="auto">Amount: <input value={this.state.amount} onInput={setAmount}/></label>
                <label mx="auto">Price: <input value={this.state.price} onInput={setPrice}/></label>
                <Button variant="outlined" size='medium' onClick={this.sendBuyMessage} mx="auto">Buy</Button>
                <Button variant="outlined" size='medium' onClick={this.sendSellMessage} mx="auto">Sell</Button>
            </div>
        );

    }
}

export default OrderInput;