import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers';
import { VerticalLayout } from './layouts';

ReactDOM.render(
  <VerticalLayout>
    <Router />
  </VerticalLayout>,
  document.getElementById('<%= name %>')
);
