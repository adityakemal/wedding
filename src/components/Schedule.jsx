import React from 'react';
import photo from '../img/photo.jpg'

function Schedule(props) {
    return (
        <div className='schedule container'>
            <div className=" row w-100 g-0">
                <div className="col-md-7 box p-0">
                    <div className='w-100'>
                        <img src={photo} alt="photo" />
                    </div>
                </div>
                <div className="col-md-5 parents ">
                    <div className="bingkai">
                        <h2>Rania Nisrina Muazis</h2>
                        <small>Putri dari</small>
                        <p>Bapak M Nasrul Muazis</p>
                        <p>Ibu Elly Hariyanti</p>
                        <h2 className='and'>&</h2>
                        <h2>Kemal Aditya Zulfiqar</h2>
                        <small>Putra dari</small>
                        <p>Bapak Saefuddin W</p>
                        <p>Ibu Atiek Maryah U</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;