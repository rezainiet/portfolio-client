import React from 'react';
import { useNavigate } from 'react-router-dom';
import partsProducer from '../../../images/parts-producer.png';

const Project = ({ product, index }) => {
    const { name, info, _id, img1 } = product;
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/project/${id}`);
    }
    return (
        <div className="hero py-5 bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <h1 className="text-5xl font-bold text-secondary">{index + 1}.</h1>
                <img src={img1} width='550px' />
                <div>
                    <h1 className="text-5xl font-bold font-bold">{name}</h1>
                    <p className="py-6">{info}</p>
                    <button onClick={() => handleClick(product._id)} className="btn btn-primary">Show More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;