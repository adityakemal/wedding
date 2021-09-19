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
import Login from './components/Login';
import Confirmation from './components/Confirmation';
import Brides from './components/Brides';

function PrivateRoute({ children, ...rest }) {
  let auth = localStorage.getItem('auth')
  let token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && token ==='token12345'? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
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
        <Brides />
        <Schedule />
        <Destination />
        <Confirmation />
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
            <Route exact path="/login">
           <Login />
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
