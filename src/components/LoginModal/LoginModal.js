import React, {Component} from 'react';
import Fab from "@material-ui/core/Fab/index";
import Dialog from "@material-ui/core/Dialog/index";
import DialogTitle from "@material-ui/core/DialogTitle/index";
import DialogContent from "@material-ui/core/DialogContent/index";
import {GoogleLogin} from "react-google-login";
import DialogActions from "@material-ui/core/DialogActions/index";
import {Button} from "@material-ui/core";
import './LoginModal.scss'

class LoginModal extends Component{

  render() {
    const {onSocialLogin, onSocialFail, handleOpen, handleClose, modalState} = this.props;

    return (
      <div>
        <Fab color="secondary" variant="extended" className="loginBtn" onClick={handleOpen}>
          Login
        </Fab>
        <Dialog
          // fullWidth={true}
          maxWidth="sm"
          open={modalState}
          onClose={handleClose}
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginModal;