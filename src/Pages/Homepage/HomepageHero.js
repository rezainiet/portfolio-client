import React from 'react';
import CustomLink from '../Shared/CustomLink/CustomLink';

const HomepageHero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='my-image.png' width='450' className='motion-safe:hover:-translate-x-0.5 motion-safe:transition' />
                <div>
                    <h1 className="text-5xl font-bold">Hey, I'm Masud Reza</h1>
                    <p className="py-6 pr-10">I'm a Developer. I am experienced with ReactJS, JavaSCript, HTML, CSS and Basic Knowledge of (NodeJS, ExpressJS, MongoDB)</p>
                    <CustomLink to="/contactMe" className="btn btn-primary">Contact Me!</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default HomepageHero;