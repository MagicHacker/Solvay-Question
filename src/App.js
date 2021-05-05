import './App.less';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import HomePage from './pages/homePage';
function App() {
  return (
    <div className="app_wrapper">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/homepage" component={HomePage} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
