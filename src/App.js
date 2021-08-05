import './styles/App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Schedule from './components/Schedule';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Admin from './components/Admin';

function PrivateRoute({ children, ...rest }) {
  let auth = localStorage.getItem('auth')
  let token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  const landingPage = ()=>{
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Schedule />
        <Destination />
      </div>
    )
  }

  let fourOfour = ()=>  <div style={{height : '100vh', display: 'flex', alignItems: 'center', justifyContent:'center'}}> <h4>Page not found :(</h4></div>
  return (
    <Router>
    <Switch>
          <Route exact path="/">
           {landingPage}
          </Route>
          <PrivateRoute exact path="/admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="*">
            {fourOfour}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
