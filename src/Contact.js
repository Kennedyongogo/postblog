import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaFacebook } from 'react-icons/fa';

const Contact = () => {
    const facebookUrl = 'https://www.facebook.com/login';
    const [state, handleSubmit] = useForm("mkgwrgyb");
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Create a ref for the form
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded && !formSubmitted) {
            setFormSubmitted(true);
            alert('Thanks for contacting Carl Car Collection. We will get back to you soon.');
            // After alert is dismissed, reset the form
            setTimeout(() => {
                setFormSubmitted(false);
                if (formRef.current) {
                    formRef.current.reset();
                }
            }, 0);
        }
    }, [state.succeeded, formSubmitted]);

    return (
        <div className='container'>
            <h1 className='heading'>Contact Carl Car Collection</h1>
            {!formSubmitted ? (
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='Enter Email'
                        className='input'
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="tel" 
                        name="phone"
                        placeholder='Enter Phone Number'
                        className='input'
                    />
                    <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Type Message'
                        className='input'
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                    <div>
                        <p>Phone : 0798757460 </p>
                    </div>
                </form>
            ) : null}
            <a 
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    textDecoration: 'none', 
                }}
            >
                <FaFacebook className='icon'/>
            </a>
        </div>
    );
}

export default Contact;