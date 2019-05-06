import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from "../pages";
import { Helmet } from "react-helmet";
import NotFound from "../pages/errors/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>velog</title>
        <meta
          name="description"
          content="개발자들을 위한 취향저격 블로그 서비스. 어디서 글 쓸지 고민하지 말고 벨로그에서 시작하세요."
        />
        <meta property="fb:app_id" content="203040656938507" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;