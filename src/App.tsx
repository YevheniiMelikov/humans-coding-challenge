import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PageLayout } from './components/PageLayout';
import { Notes } from './pages/Notes';

export const App: React.FC = () => (
  <BrowserRouter>
    <PageLayout>
      <Navbar />
      <Switch>
        <Route path="/humans/new" exact render={() => <Notes newHuman />} />
        <Route path="/humans/:id" component={Notes} />
        <Redirect to="/humans/new" />
      </Switch>
    </PageLayout>
  </BrowserRouter>
);
