import React from 'react';
import { Helmet } from 'react-helmet';
import RespStatus from '../../components/etc/RespStatus';

const NotFound = () => {
  return (
    <RespStatus code={404}>
      <Helmet>
        <title>Oops!</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      {/*<ErrorInfo code="404" message="그것은, 그 아무것도 없다는 것." />*/}
      <h1>Error</h1>
    </RespStatus>
  );
};

export default NotFound;
