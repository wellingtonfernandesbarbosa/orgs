import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/feira">
            <Feira />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
