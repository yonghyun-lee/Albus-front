import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from "../pages";
import { Helmet } from "react-helmet";
import NotFound from "../pages/errors/NotFound";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import PicturePage from "../pages/PicturePage";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Albus</title>
        <meta
          name="description"
          content="추억을 담을 수 있는 나만의 앨범을 만들고 전시해보세요."
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/picture" component={PicturePage} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;