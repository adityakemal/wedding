import React from 'react';
import photo from '../img/fotobanyak.jpg'
import daun from '../img/daun.png'
import { Calendar, Clock } from 'react-feather';

function Schedule(props) {
    return (
        <div className='schedule' id="schedule">
            <div className="container">
                <div className="box">
                    <h2>OUR SPECIAL EVENT</h2>
                    <div className="cardcus col-md-6 col-12">
                        <div className="glass"></div>
                        <Calendar />
                        <h3>Minggu, 10 Oktober 2021</h3>
                        <div className="wrapdate">
                            <div>
                                <h5>Akad</h5>
                                <Clock />
                                <h3>11:00 - 16:00</h3>
                            </div>
                            <div>
                                <h5>Resepsi</h5>
                                <Clock />
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