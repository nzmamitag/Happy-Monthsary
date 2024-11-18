import './Flower.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Flower() {
    return (
        <div className="mainContainer">
             <h2>Happy Monthsary!!!</h2>
            <div className='flower'>
                <div class="flower">
                    <div class="flower-pp">
                        <div class="flower_l"></div>
                        <div class="f">
                            <div class="leaf leaf--1"></div>
                            <div class="leaf leaf--2"></div>
                            <div class="leaf leaf--3"></div>
                            <div class="leaf leaf--4"></div>
                            <div class="leaf leaf--5"></div>
                            <div class="leaf leaf--6"></div>
                            <div class="leaf leaf--7"></div>
                            <div class="leaf leaf--8 flower__fall-down--yellow"></div>
                        </div>
                    </div>

                    <div class="flower-pp flower-pp--2">
                        <div class="flower_l"></div>
                        <div class="f">
                            <div class="leaf leaf--1"></div>
                            <div class="leaf leaf--2"></div>
                            <div class="leaf leaf--3"></div>
                            <div class="leaf leaf--4"></div>
                            <div class="leaf leaf--5"></div>
                            <div class="leaf leaf--6"></div>
                            <div class="leaf leaf--7"></div>
                            <div class="leaf leaf--8 flower__fall-down--pink"></div>
                        </div>
                    </div>

                    <div class="flower-pp flower-pp--3">
                        <div class="flower_l"></div>
                        <div class="f">
                            <div class="leaf leaf--1"></div>
                            <div class="leaf leaf--2"></div>
                            <div class="leaf leaf--3"></div>
                            <div class="leaf leaf--4"></div>
                            <div class="leaf leaf--5"></div>
                            <div class="leaf leaf--6"></div>
                            <div class="leaf leaf--7"></div>
                            <div class="leaf leaf--8 flower__fall-down--purple"></div>
                        </div>
                    </div>
                    <div class="flower__glass"></div>
                </div>
            </div>
            <Link to='/'><div className="links">Home</div></Link>
        </div>
    );
}

export default Flower;
