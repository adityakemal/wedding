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
import { useEffect, useState } from 'react';
import sound from './audio/soundWedd.mp3'
import ModalTemplate from './shared/ModalAlert';
import Lottie from 'react-lottie';
import him1 from './lottie/him1.json';
import him2 from './lottie/him2.json';
import him3 from './lottie/him3.json';
import him4 from './lottie/him4.json';

import {Volume2, VolumeX} from 'react-feather'

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

  const [modalCovid, setModalCovid] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [soundWedd] = useState(new Audio(sound));
  
  useEffect(() => {
      playing ? soundWedd.play() : soundWedd.pause();
    },
    [playing]
  );
  
  let handleOke = ()=>{
    setPlaying(!playing)
    setModalCovid(!modalCovid)
  }

  let handleStopMusic = ()=> {
    setPlaying(!playing)
  }

  let alertCovid = ()=>(
    <div className='alert_covid'>
      <h1>Himbauan</h1>
      <p>Dikarenakan situasi pandemi saat ini, maka acara akan dilaksanakan dengan mematuhi protokol kesehatan.</p>
        <div className="box container">
  
            <Lottie 
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: him1,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                }}
                height={150}
                width={130}
            />
            <Lottie 
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: him2,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                }}
                height={150}
                width={130}
            />
            <Lottie 
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: him3,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                }}
                height={150}
                width={130}
            />
            <Lottie 
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: him4,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                }}
                height={150}
                width={130}
            />
        </div>
    <button className='btn-success btn mt-4' onClick={handleOke}>Oke</button>
    </div>
  )

  const landingPage = ()=>{
    return (
      <div className="App">
        <ModalTemplate component={alertCovid} onOpen={modalCovid}/>
        <Navbar />
        <Home />
        <Brides />
        <Schedule />
        <Destination />
        <Confirmation />
        <div  className='butstop'>
          {
            playing ?
            <VolumeX  size={45} onClick={handleStopMusic} />
            :
            <Volume2  size={45} onClick={handleStopMusic} />
          }
        </div>
      </div>
    )
  }

  let fourOfour = ()=>  <div style={{height : '100vh', display: 'flex', alignItems: 'center', justifyContent:'center'}}> <h4>Page not found :(</h4></div>
  return (
    <Router>
      <Switch>
          <Route exact path="/for/:id">
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
