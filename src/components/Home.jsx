import React from 'react';
// import { Smile } from 'react-feather';
import BottomCenter from '../img/BottomCenter.png'
import BottomLeft from '../img/BottomLeft.png'
import BottomRight from '../img/BottomRight.png'

function Home(props) {
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
                <h4>hello, <span>SAFIRA </span>. <br /> we are joyfully inviting you to our precious celebration.</h4>

                <div className='counter'>
                    <p className="count">20 <span>Days</span></p>
                    <p className="count">10 <span>Hours</span></p>
                    <p className="count">05 <span>Minutes</span></p>
                    <p className="count">55 <span>Secconds</span></p>
                </div>
            </div>
        </div>
    );
}

export default Home;