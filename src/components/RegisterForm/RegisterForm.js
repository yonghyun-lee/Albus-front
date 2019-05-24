import React, { Component } from 'react';
import './RegisterForm.scss';

class RegisterForm extends Component {
  render() {
    return (
      <div className="registerForm">
        <form acion="">
          <div className="registerFormTitle">
            회원 가입
          </div>
          <div className="registerInput">
            <label htmlFor="email">Email*</label>
            <input id="email" type="email" placeholder="Email" autoComplete="off"/>
          </div>
          <div className="registerInput">
            <label htmlFor="name">이름*</label>
            <input id="name" type="text" placeholder="Name" autoComplete="off"/>
          </div>
          <div className="registerInput">
            <input type="submit" value="다음"/>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
