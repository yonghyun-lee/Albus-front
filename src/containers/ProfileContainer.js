import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ProfileActions} from "../store/actionCreators";
import Profile from "../components/Profile/Profile";

class ProfileContainer extends Component {

  handleMenu = () => {
    if (this.props.open) {
      ProfileActions.close();
    } else {
      ProfileActions.open();
    }
  };

  render() {
    const {user, open} = this.props;

    return (
      <Profile user={user} handleMenu={this.handleMenu} open={open}/>
    );
  }
}

export default withRouter(
  connect((state) => ({
      open: state.profile.open
    })
  )(ProfileContainer));