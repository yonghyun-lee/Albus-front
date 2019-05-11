import React, {Component} from 'react';
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {GoogleLogin} from "react-google-login";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";

class LoginModal extends Component{

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
    const {onSocialLogin, onSocialFail} = this.props;

    return (
      <div>
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
              onSuccess={onSocialLogin}
              onFailure={onSocialFail}
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
    );
  }
}

export default LoginModal;