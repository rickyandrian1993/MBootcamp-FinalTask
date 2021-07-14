import Home from './containers/Home';
import Login from './containers/Login';
import Cart from './containers/Cart';
import store from './hooks/store';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Appbar from './components/Appbar';
import { createBrowserHistory } from 'history';
import Admin from './containers/Admin';
import Registration from './containers/Registration';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Appbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={Home} />
          <Route path="/registration" component={Registration} />
          <ProtectedRoute path="/admin" component={Admin} />
          <Login />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
