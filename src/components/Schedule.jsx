import React, { useState } from 'react';
import photo from '../img/fotobanyak.jpg'
import daun from '../img/daun.png'
import { Calendar, Clock } from 'react-feather';
import Lottie from 'react-lottie';
import animationData from '../lottie/cal.json';
import clockLot from '../lottie/clock.json';
import cincin from '../img/cincin.JPG'

function Schedule(props) {
    const [cal, setCal] =useState(false)
    return (
        <div 
        className='schedule' 
        id="schedule" 
        style={{backgroundImage: `url(${cincin})`}}
        > 
            <div className="container">
                <div className="box">
                    <h2>OUR SPECIAL EVENT</h2>
                    <div className="cardcus col-md-6 col-12">
                        <div className="glass"></div>
                        <div onMouseOver={()=>setCal(true)} onMouseLeave={()=>setCal(false)}>

                            <Lottie 
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationData,
                                    rendererSettings: {
                                    //   preserveAspectRatio: "xMidYMid slice"
                                    }
                                }}
                                // isStopped={cal}
                                isPaused={cal}
                                height={70}
                                width={70}
                            />
                        </div>
                        <h3>Minggu, 10 Oktober 2021</h3>
                        <div className="wrapdate">
                            <div>
                                <h5>Akad</h5>
                                <Lottie 
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: clockLot,
                                        rendererSettings: {
                                        //   preserveAspectRatio: "xMidYMid slice"
                                        }
                                    }}
                                    height={70}
                                    width={70}
                                />
                                <h3>09:00 - 11:00</h3>
                            </div>
                            <div>
                                <h5>Resepsi</h5>
                                <Lottie 
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: clockLot,
                                        rendererSettings: {
                                        //   preserveAspectRatio: "xMidYMid slice"
                                        }
                                    }}
                                    height={70}
                                    width={70}
                                />
                                <h3>11:00 - 16:00</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Schedule;