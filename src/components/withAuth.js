import React, { Component } from 'react';
import AuthService from '../lib/AuthService';

export default function withAuth(AuthComponent) {
  return class AuthWrapped extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null
      }
    }

    componentWillMount() {
      if (!AuthService.loggedIn()) {
        this.props.history.replace('/')
      } else {
        try {
          const profile = AuthService.getProfile();
          this.setState({
            user: profile
          })
        } catch (err) {
          AuthService.logout();
          this.props.history.replace('/')
        }
      }
    }

    render() {
      if (this.state.user) {
        return (<AuthComponent/>);
      } else {
        return null
      }
    }
  }
}