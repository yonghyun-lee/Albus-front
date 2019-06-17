import React  from 'react';
import './RegisterForm.scss';

export const RegisterForm = (props) => {
  return (
    <div className="registerForm">
      <form onSubmit={props.onRegister}>
        <div className="registerFormTitle">
          회원 가입
        </div>
        <div className="registerInput">
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" placeholder="Email" autoComplete="off" disabled value={props.email}/>
        </div>
        <div className="registerInput">
          <label htmlFor="name">이름*</label>
          <input className={props.error? "InputError":""} id="name" type="text" placeholder="Name" autoComplete="off" onChange={props.onChange}/>
        </div>
        <div className="registerInput">
          <input type="submit" value="다음"/>
        </div>
      </form>
    </div>
  );
};