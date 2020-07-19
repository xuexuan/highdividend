import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function UserNameFormDialog(props) {
 
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter the username and start the trading."
            onChange={props.setUserName}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Start Trading
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
