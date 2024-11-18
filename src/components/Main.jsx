import React from 'react';
import './Main.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className='mainContainer'>
            <TypeAnimation
                sequence={[
                    'Hallooo',
                    1000,
                    'Babiiilabs',
                    2000,
                ]}
                speed={40}
                repeat={Infinity}
                className='roleAnimation'
            />
            <Link to='/flower'><div className="links">Click Me! </div></Link>
        </div>
    )
}
export default Main;