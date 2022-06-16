import React, { useEffect, useState } from 'react';
import Project from './Project';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://rezas-portfolio.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div>
            <div className='my-10'>
                <h2 className="text-center text-secondary text-3xl font-bold">Latest Projects</h2>
                <p className='text-center text-xl font-semibold'>Some latest projects are here!</p>
            </div>
            <div>

                {
                    projects.map((product, index) => <Project product={product} key={product._id} index={index}></Project>)
                }
                {/* <div className="hero py-5 bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <h1 className="text-5xl font-bold text-secondary">1.</h1>
                        <img src={partsProducer} width='550px' />
                        <div>
                            <h1 className="text-5xl font-bold font-bold">Parts Producer</h1>
                            <p className="py-6">It is a full stack application. Mades with ReactJS.</p>
                            <button className="btn btn-primary">Show More Details</button>
                        </div>
                    </div>
                </div>
                <div className="hero py-5 bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <h1 className="text-5xl font-bold text-secondary">2.</h1>
                        <img src={macology} width='550px' />
                        <div>
                            <h1 className="text-5xl font-bold">Macology</h1>
                            <p className="py-6">It is a full stack application. Mades with ReactJS.</p>
                            <button className="btn btn-primary">Show More Details</button>
                        </div>
                    </div>
                </div>
                <div className="hero py-5 bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <h1 className="text-5xl font-bold text-secondary">3.</h1>
                        <img src={gymMaster} width='550px' />
                        <div>
                            <h1 className="text-5xl font-bold font-bold">Gym Master</h1>
                            <p className="py-6">It is a simple website. Mades with ReactJS.</p>
                            <button className="btn btn-primary">Show More Details</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default MyProjects;