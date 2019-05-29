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
}

export default new AuthService();