import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/splash_container';
import Charts from './home/charts';


const Root = ({store}) => {

  const _redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/");
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path="home" component={HomeContainer} onEnter={_redirectIfLoggedOut}>
            <IndexRoute component={Charts}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
