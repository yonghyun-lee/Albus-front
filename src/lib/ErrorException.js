class ErrorException {

  getResponse = (e) => {
    return e.response.data;
  };

  googleOAuthFail = (e) => {
    console.log(e)
  };

  loginFail = (e) => {
    console.log(e.response.data.message);
  }
}

export default new ErrorException();