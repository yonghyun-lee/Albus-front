class ErrorException {

  getResponse = (e) => {
    return e.response.data;
  };

  googleOAuthFail = (e) => {
    console.error(e)
  };

  loginFail = (e) => {
    console.error(e.response.data.message);
  }
}

export default new ErrorException();