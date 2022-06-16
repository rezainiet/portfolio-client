import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_1zrsdib',
            'template_vqmf3f7',
            toSend,
            'ij9VhyMOi7XwvARkk'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>

                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text">From Name</span>
                                </label>
                                <input className="input input-bordered"
                                    type='text'
                                    name='from_name'
                                    placeholder='from name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text">To Name</span>
                                </label>
                                <input className="input input-bordered"
                                    type='text'
                                    name='to_name'
                                    placeholder='to name'
                                    value={toSend.to_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input className="input input-bordered"
                                    type='text'
                                    name='message'
                                    placeholder='Your message'
                                    value={toSend.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input className="input input-bordered"
                                    type='text'
                                    name='reply_to'
                                    placeholder='Your email'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                />
                            </div>
                            <input className="btn btn-secondary mt-5" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Me!</h1>
                    <p className="py-6">To get reply soon send me a message to get response soon! <span className='text-primary'>Thank You!</span></p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;