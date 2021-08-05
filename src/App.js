import './styles/App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Schedule from './components/Schedule';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
  return (
    <Router>
    <Switch>
          <Route exact path="/">
           {landingPage}
          </Route>
          <Route exact path="/admin">
            <div>admin</div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
