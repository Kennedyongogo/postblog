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
        <div>
            <h1>Contact Carl Car Collection</h1>
            <a 
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none', 
      }}
    >
      <FaFacebook 
        style={{
          color: '#4267B2', // Facebook blue
          fontSize: '24px', // Adjust size as needed
          transition: 'color 0.3s ease',
        }}
      />
    </a>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter Email'
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
        type="phone" 
        name="Phone"
        placeholder='Enter Phone Number'
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Type Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </div>
     );
}
 
export default Contact;