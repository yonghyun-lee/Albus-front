import decode from 'jwt-decode';
import * as axios from "axios";

class AuthService {
  serverHost;

  constructor() {
    this.serverHost = 'http://localhost:4000';
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
      url: this.serverHost + '/auth/googleLogin'
    };

    try {
      return await axios(option);
    } catch (e) {
      throw e
    }
  };

  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token) // handwaiving here
  };

  isTokenExpired = (token) => {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    }
    catch (err) {
      return false;
    }
  };

  getToken = () => {
    return localStorage.getItem('accessToken')
  };

  logout = () => {
    localStorage.removeItem('accessToken');
  };

  getProfile = () => {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }
}

export default new AuthService();