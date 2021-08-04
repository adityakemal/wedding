import './styles/App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Schedule />
      <Destination />
    </div>
  );
}

export default App;
