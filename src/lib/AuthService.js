import * as axios from "axios";
import Cookie from "js-cookie";
import {LoginActions} from "../store/actionCreators";
import 'dotenv/config';

class AuthService {
  serverHost;

  constructor() {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
      this.serverHost = 'http://localhost:4000';
    } else {
      this.serverHost = 'https://api.albus-service.ml';
    }
  }

  login = async (accessToken) => {
    const option = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      data: {
        accessToken: accessToken
      },
      withCredentials: true,
      url: this.serverHost + '/auth/googleLogin'
    };

    try {
      return await axios(option);
    } catch (e) {
      throw e
    }
  };

  checkToken = async () => {
    const option = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      withCredentials: true,
      url: this.serverHost + '/auth/token'
    };

    try {
      return await axios(option);
    } catch (e) {
      throw e
    }
  };

  landingAuthCheck = async (isLoggedIn, history) => {
    if (isLoggedIn) {
      history.push('/main');
    } else {
      const accessToken = Cookie.get('access_token');
      if (accessToken) {
        try {
          const res = await this.checkToken();

          if (res.status === 200) {
            await LoginActions.loginSuccess(res.data);
            history.push('/main');
          }
        } catch (e) {
          if (e.response.data.status === 401) {
            Cookie.remove('access_token');
          } else {
            console.error(e);
          }
        }
      }
    }
  };

  authCheck = async (isLoggedIn, history) => {
    if (!isLoggedIn) {
      const accessToken = Cookie.get('access_token');
      if (accessToken) {
        try {
          const res = await this.checkToken();

          if (res.status ===200) {
            await LoginActions.loginSuccess(res.data);
          }
        } catch (e) {
          if (e.response.data.status === 401) {
            history.push('/');
          } else {
            console.error(e);
          }
        }
      } else {
        history.push('/');
      }
    }
  };

  logout = async () => {
    const domain = process.env.NODE_ENV==='development'? 'localhost':'albus-service.ml';
    await Cookie.remove('access_token', domain);
    window.location.reload();
  }
}

export default new AuthService();