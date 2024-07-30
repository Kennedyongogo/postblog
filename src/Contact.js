import { FaFacebook } from 'react-icons/fa';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const facebookUrl = 'https://www.facebook.com/login';
    const [state, handleSubmit] = useForm("mkgwrgyb");
    if (state.succeeded) {
        return <p>Thanks for Contacting Carl Car Collection</p>;
    }
    return ( 
        <div className='container'>
            <h1 className='heading'>Contact Carl Car Collection</h1>   
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
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
      <label htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        type="tel" 
        name="Phone"
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