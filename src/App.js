import React, { memo } from 'react';

import { renderRoutes } from 'react-router-config';
import routes from 'router';
import { HashRouter } from 'react-router-dom';

import AppHeader from 'components/app-header';
import AppFooter from 'components/app-footer';

const App = () => {
  return (
    <HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>

    
  );
}

export default memo(App);
