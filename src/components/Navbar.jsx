import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="container links">
                <a href="#destination">LOKASI</a>
                <a href="#schedule">JADWAL</a>
                <a href="#confirmation">KONFIRMASI</a>
            </div>
        </div>
    );
}

export default Navbar;