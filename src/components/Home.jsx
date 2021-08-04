
import React, { useEffect, useState } from "react";
// import { Smile } from 'react-feather';
import BottomCenter from '../img/BottomCenter.png'
import BottomLeft from '../img/BottomLeft.png'
import BottomRight from '../img/BottomRight.png'


function Home(props) {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-15`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];

      Object.keys(timeLeft).forEach((interval) => {
        // if (!timeLeft[interval]) {
        //   return;
        // }
        timerComponents.push(
          <p className='count'>
            {timeLeft[interval]} <span>{interval}</span> 
          </p>
        );
      });

    return (
        <div className='home'
            style={{backgroundImage: `url(${BottomCenter}),url(${BottomLeft}) ,url(${BottomRight})`}}
        >
            <div>
                <div className="title">
                    <div className="line"></div>
                        <h4> the wedding of </h4>
                    <div className="line"></div>
                </div>
                <h1>Rania & Kemal</h1>
                <h4>hello, <span>SAFIRA</span>. <br /> we are joyfully inviting you to our precious celebration.</h4>
                <div className='counter'>
                    {/* <p className="count">20 <span>Days</span></p>
                    <p className="count">10 <span>Hours</span></p>
                    <p className="count">05 <span>Minutes</span></p>
                    <p className="count">55 <span>Secconds</span></p> */}
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>
            </div>
        </div>
    );
}

export default Home;