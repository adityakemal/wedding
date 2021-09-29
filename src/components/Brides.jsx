import React from 'react';
import photo from '../img/fotobanyak.jpg'
import daun from '../img/daun.png'
import Fade from 'react-reveal/Fade';


function Brides(props) {
    return (
        <div className='brides'>
            <div className="container-fluid">
                <div className=" row w-100 g-0">
                    <div className="col-md-7 box p-0">

                        <div className='w-100'>
                            <Fade left>
                            <img src={photo} alt="photo" />
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-5 parents ">
                    <Fade right cascade>
                        <div className="bingkai">
                                <img className='mb-3' src={daun} alt="daun" />
                            <h2>Rania Nisrina Muazis</h2>
                            <small>Putri dari</small>
                            <p>Bapak M Nasrul Muazis</p>
                            <p>Ibu Elly Hariyanti</p>
                            <div className='and'>
                                <div className='line'></div>
                                and
                                <div className='line'></div>
                            </div>
                            <h2>Kemal Aditya Zulfiqar</h2>
                            <small>Putra dari</small>
                            <p>Bapak Aep Saepudin</p>
                            <p>Ibu Atiek Maryah U</p>
                        </div>
                        </Fade >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brides;