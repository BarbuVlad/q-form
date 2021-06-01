import TestCreator from './pages/TestCreator';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import SolveTest from './pages/SolveTest';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Switch>
      
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/create">
        <TestCreator />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/solve">
        <SolveTest />
      </Route>

    </Switch>
    </Router>

  );
}

export default App;
