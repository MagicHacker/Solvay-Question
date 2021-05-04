import './App.less';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import HomePage from './pages/homePage';
function App() {
  return (
    <div className="app_wrapper">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/homepage" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
