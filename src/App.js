import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { Home, User } from './pages';
import { GlobalStyle, theme } from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:user" component={User} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
