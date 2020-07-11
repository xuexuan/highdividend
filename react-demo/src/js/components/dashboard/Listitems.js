import React, {useState, Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Mkdataboard from './marketdataboard';
import { render } from 'react-dom';
import HistDividend from "./HistDividends"

class MainListItems extends Component{

  constructor(props){
    super(props);
    console.log(props.updateWidget);
  }

  render(){
    return(<div>
      <ListItem button 
      onClick={()=>this.props.updateWidget('marketdata')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="MarketBoard" />
      </ListItem>
      <ListItem button
      onClick={()=>this.props.updateWidget('marketdata')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="BackTester" />
      </ListItem>
      <ListItem button
      onClick={()=>this.props.updateWidget('orderbook')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="BuySellOrders" />
      </ListItem>
      <ListItem button
      onClick={()=>this.props.updateWidget('marketdata')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Wallet" />
      </ListItem>
      <ListItem button
      onClick={()=>this.props.updateWidget('marketdata')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Discussion" />
      </ListItem>
    </div>)
  }
}

export default MainListItems;