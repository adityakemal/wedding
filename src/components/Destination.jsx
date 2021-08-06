import React from 'react';
import { MapPin } from 'react-feather';
import Lampung from '../img/lampung.png'


function Destination(props) {
    return (
        <div className='destination' id='destination'>
            <h1>DESTINATION</h1>
            {/* <img className='lampungimg' src={Lampung} alt="city" /> */}
            <h5>Jl Srikresna No 82, Sawah Brebes, Tanjung Karang Timur, <br /> Bandar Lampung.</h5>
            <br />
            <div className="frame">
                <iFrame style={{filter: "invert(90%)"}} className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0687494845333!2d105.26391011536032!3d-5.4064990960787345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40daffe3218041%3A0xb995425808d7be5!2sJl.%20Sri%20Kresna%20No.82%2C%20Sawah%20Brebes%2C%20Kec.%20Tj.%20Karang%20Tim.%2C%20Kota%20Bandar%20Lampung%2C%20Lampung%2035124!5e0!3m2!1sen!2sid!4v1628084068199!5m2!1sen!2sid" allowFullScreen="" loading="lazy" />
            </div>
            <br />
            <a href="https://goo.gl/maps/ftKjx6MzLoptG19a6">
                <button>
                Go to destination <MapPin /> 
                </button>
            </a>
        </div>
    );
}

export default Destination;