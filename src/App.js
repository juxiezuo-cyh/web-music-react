import React, { memo } from 'react';
import { Provider } from 'react-redux';

import { renderRoutes } from 'react-router-config';
import routes from 'router';
import { HashRouter } from 'react-router-dom';

import store from './store';

import AppHeader from 'components/app-header';
import AppFooter from 'components/app-footer';

const App = () => {
  return (
    // 通过Provider共享store
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>

    
  );
}

export default memo(App);
