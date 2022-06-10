import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import resume from '../../img/Jubaer Al Muzahid-Resume.pdf';

const Banner = () => {
    return (
        <div>
            <h1 className='text-6xl mt-16 text-center font-bold'>Junior Font End Developer</h1>
            <div className='flex flex-col item-center justify-center'>
                <p className='text-xl banner-text'>
                    Hi I am Jubaer Al Muzahid, Junior front-end developer. I build,
                    Things that lives in Internet, with simple code.
                </p>
                <Link to={resume} target="_blank" className='btn text-center btn-outline w-64 mt-10 mb-20 mx-auto' download>My Resume</Link>
            </div>

        </div>
    );
};

export default Banner;