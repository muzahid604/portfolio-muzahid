import React from 'react';
import cycleon from '../../img/cycleon.PNG'
import educare from '../../img/new.PNG'
import power from '../../img/power.PNG'



const Projects = () => {
    return (
        <div className='lg:m-10'>
            <h1 className='text-4xl text-center my-10'>MY PROJECTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div class="card w-80 bg-base-100 shadow-xl">
                    <figure><img src={power} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            POWER ZONE
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/muzahid604/power-zone' target='__blank' className='btn btn'>CODE</a>
                            <a href='https://power-zone-30abb.web.app/' target='__blank' className='btn btn'>Live</a>
                        </div>
                    </div>
                </div><div class="card w-80 bg-base-100 shadow-xl">
                    <figure><img src={educare} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            AGILE MANUFACTURER LTD

                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/muzahid604/agile-manufacturing-client' target='__blank' className='btn btn'>CODE</a>
                            <a href='https://agile-manufacturing.web.app' target='__blank' className='btn btn'>Live</a>
                        </div>
                    </div>
                </div><div class="card w-80 bg-base-100 shadow-xl">
                    <figure><img src={cycleon} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            CYCLEON
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/muzahid604/cycleon' target='__blank' className='btn btn'>CODE</a>
                            <a href='https://cycle-warehouse.web.app/' target='__blank' className='btn btn'>Live</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;