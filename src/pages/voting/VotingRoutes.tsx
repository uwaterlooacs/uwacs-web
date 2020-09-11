import React from 'react';
import { Switch, Route } from 'react-router-dom';

const VotingHome = React.lazy(() => import('./VotingHome'));
const VotingCompleteSignUp = React.lazy(() => import('./VotingCompleteSignUp'));
const VotingFAQ = React.lazy(() => import('./VotingFAQ'));

const VotingRoutes = () => {
  return (
    <Switch>
      <Route path="/voting/faq" component={VotingFAQ} />
      <Route path="/voting/completesignup" component={VotingCompleteSignUp} />
      <Route path="/voting" component={VotingHome} />
    </Switch>
  );
};

export default VotingRoutes;
