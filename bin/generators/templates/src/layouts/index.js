import React from 'react';

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <h1>Welcome to the React world.</h1>
      {children}
    </div>
  );
};

export default Layout;
