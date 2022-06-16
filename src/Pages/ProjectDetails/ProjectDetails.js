import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = () => {
    const { projectID } = useParams();
    const [product, setProduct] = useState({});
    console.log(projectID);
    useEffect(() => {
        const url = `https://rezas-portfolio.herokuapp.com/projects/${projectID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    const { img1, img2, img3, githubCLientSide, liveLink, features } = product;
    return (
        <div>
            <div className="bg-base-200 py-5">
                <h2 className="text-center text-secondary text-3xl mb-5 font-bold">Screenshots</h2>
                <Carousel>
                    <div>
                        <img src={img1} alt="img" />
                        <p className="legend">Screenshot One</p>
                    </div>
                    <div>
                        <img src={img2} alt="img" />
                        <p className="legend">Screenshot Two</p>
                    </div>
                    <div>
                        <img src={img3} alt="img" />
                        <p className="legend">Screenshot Three</p>
                    </div>
                </Carousel>
                <div className='bg-base-200 my-5'>
                    <div class="hero min-h-screen bg-base-300">
                        <div class="hero-content text-center">
                            <div class="max-w-md">
                                <h1 class="text-5xl font-bold">Features...</h1>
                                <p class="py-6">{features}</p>
                                <a href={liveLink} class="btn btn-primary mr-5" target="_blank">Live Link</a>
                                <a href={githubCLientSide} class="btn btn-primary mr-5" target="_blank">Github Front-ENd</a>
                                {
                                    product.githubServerSide ? <a href={product.githubServerSide} class="btn btn-primary mr-5" target="_blank">Back-End</a> : <button className='btn btn secondary' disabled>Server Side</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;