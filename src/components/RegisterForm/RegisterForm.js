import React  from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const RegisterForm = (props) => {
  return (
    <div className={cx("registerForm")}>
      <form onSubmit={props.onRegister}>
        <div className={cx("registerFormTitle")}>
          회원 가입
        </div>
        <div className={cx("registerInput")}>
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" placeholder="Email" autoComplete="off" disabled value={props.email}/>
        </div>
        <div className={cx("registerInput")}>
          <label htmlFor="name">이름*</label>
          <input className={cx({"InputError": props.error})} id="name" type="text" placeholder="Name" autoComplete="off" onChange={props.onChange}/>
        </div>
        <div className={cx("registerInput")}>
          <input type="submit" value="다음"/>
        </div>
      </form>
    </div>
  );
};