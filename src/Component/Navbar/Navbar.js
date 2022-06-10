import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar px-6">
            <div class="navbar-start hidden lg:block">
                <div class="dropdown">
                    <a class="btn btn-ghost normal-case text-2xl">JAM</a>
                </div>
            </div>
            <div class="navbar-center ml-10">




            </div>
            <div class="navbar-end">
                <button className='btn btn-primary ml-5'>Home</button>
                <button className='btn btn-primary ml-5'>About</button>
                <button className='btn btn-primary mx-5'>Contact</button>
                <a href='a' className='btn btn-outline'>Resume</a>
            </div>
        </div>
    );
};

export default Navbar;