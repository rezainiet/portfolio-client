import React from 'react';

const MySKills = () => {
    return (
        <div>
            <div className='my-10'>
                <h2 className="text-center text-secondary text-3xl font-bold">My SKills</h2>
                <p className='text-center text-xl font-semibold'>Skills on Web Development!</p>
            </div>
            <div className='flex justify-between items-center mx-20'>
                <ul className="steps steps-vertical">

                    <li className="step step-info"><div>
                        HTML <input type="range" min="0" max="100" value="90" className="range" step="5" />
                        90%
                    </div></li>
                    <li className="step step-info"><div>
                        CSS <input type="range" min="0" max="100" value="75" className="range" step="5" />
                        75%
                    </div></li>
                    <li className="step step-info"><div>
                        Bootstrap <input type="range" min="0" max="100" value="75" className="range" step="5" />
                        75%
                    </div></li>
                    <li className="step step-info"><div>
                        TailwindCSS <input type="range" min="0" max="100" value="85" className="range" step="5" />
                        80%
                    </div></li>
                </ul>
                <ul className="steps steps-vertical">

                    <li className="step step-info"><div>
                        JavaScript <input type="range" min="0" max="100" value="80" className="range" step="5" />
                        80%
                    </div></li>
                    <li className="step step-info"><div>
                        ReactJS <input type="range" min="0" max="100" value="85" className="range" step="5" />
                        85%
                    </div></li>
                    <li className="step step-info"><div>
                        NodeJS <input type="range" min="0" max="100" value="55" className="range" step="5" />
                        55%
                    </div></li>
                    <li className="step step-info"><div>
                        ExpressJS <input type="range" min="0" max="100" value="55" className="range" step="5" />
                        55%
                    </div></li>
                    <li className="step step-info"><div>
                        MongoDB <input type="range" min="0" max="100" value="75" className="range" step="5" />
                        70%
                    </div></li>
                </ul>
            </div>
        </div>
    );
};

export default MySKills;