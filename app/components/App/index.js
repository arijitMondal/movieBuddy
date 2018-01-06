import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/Home';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="MovieBuddy"
      >
        <meta name="description" content="Your own movie companion" />
      </Helmet>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
