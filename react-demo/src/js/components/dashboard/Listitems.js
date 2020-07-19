import React, {useState, Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import UserNameFormDialog from "./UserNameForm"

class MainListItems extends Component{

  constructor(props){
    super(props);
    this.state = {open:false};
    console.log(props.updateWidget);
  }

  render(){
    const setClose = event=>{
      this.setState({open:false});
      this.props.updateWidget('Trading');
    };

    return(<div>
      <UserNameFormDialog open={this.state.open} setUserName={this.props.setUserName} handleClose={setClose}/>
      <ListItem button 
      onClick={()=>{
        this.props.updateWidget('marketdata'); 
        this.props.setTitleName("Monthly High Yield Dividend Stock in HKEX");
        }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="MarketBoard" />
      </ListItem>
      {/* <ListItem button
      onClick={()=>this.props.updateWidget('marketdata')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="BackTester" />
      </ListItem> */}
      <ListItem button
      onClick={()=>{
        this.setState({open:true});
        this.props.setTitleName("Virtual coin trading board");
        }}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Trading"/>
      </ListItem>
      {/* <ListItem button
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
      </ListItem> */}
    </div>)
  }
}

export default MainListItems;