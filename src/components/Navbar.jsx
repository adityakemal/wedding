import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="container links">
                <a href="#">DESTINATION</a>
                <a href="#">SCHEDULE</a>
                <a href="#">CONFIRMATION</a>
                <a href="#">FAQ</a>
            </div>
        </div>
    );
}

export default Navbar;