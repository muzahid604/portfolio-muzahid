import React from 'react';
import myPic from '../../img/muzahid.png';
import { SocialIcon } from 'react-social-icons';

const About = () => {
    return (
        <div className="hero min-h-screen lg:px-10">
            <div className="hero-content flex-col lg:justify-between lg:flex-row-reverse">
                <img alt='' src={myPic} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className=" text-5xl font-bold">Jubaer Al Muzahid</h1>
                    <p className='my-10 text-xl'>I am a Junior front-end developer specializing in building React.js WebApp. I enjoy creating things that live on the internet. My interest in web development started back in 2021, I use Javascript and React.js to create high-end interactive experiences and products. I code beautifully simple things, and I love what I do.</p>
                    <p className="text-center m-5" >
                        <SocialIcon className='p-3 m-2' url="https://www.facebook.com/" />
                        <SocialIcon className='p-3 m-2' url="https://github.com/" />
                        <SocialIcon className='p-3 m-2' url="https://linkedin.com/in/jaketrent" />
                        <SocialIcon className='p-3 m-2' url='https://twitter.com/' />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;