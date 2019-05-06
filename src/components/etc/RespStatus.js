import React from 'react';
import { Route } from 'react-router-dom';

const RespStatus = ({ code, children }) => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      }}
    />
  );
};

export default RespStatus;