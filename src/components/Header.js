import React, { Component } from 'react';
import 'styles/Header.scss';
import Fab from '@material-ui/core/Fab';
import {Button} from "@material-ui/core";
import { GoogleLogin } from 'react-google-login';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const responseGoogle = (response) => {
  console.log(response);
};

class Header extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <h1>Albus</h1>
            <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>Login</Button>
          </nav>
          <div className="title">
            <h1>Make your Album.</h1>
            <Fab color={"secondary"} variant="extended" className="loginBtn" onClick={this.handleClickOpen}>
              Login
            </Fab>
            <Dialog
              // fullWidth={true}
              maxWidth="sm"
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle style={{textAlign: "center"}} id="form-dialog-title">Login</DialogTitle>
              <DialogContent style={{textAlign: "center"}}>
                <GoogleLogin
                  className="googleLoginBtn"
                  clientId="865430704932-rlq500gfbvm6no0p0mmrg0q5aesthndn.apps.googleusercontent.com"
                  buttonText="구글 계정으로 로그인"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
