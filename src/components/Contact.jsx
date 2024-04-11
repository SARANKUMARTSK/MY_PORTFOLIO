import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnDown, faEnvelope, faPhone,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../App';
import axios from 'axios';

function Contact({ theme }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleMailer = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, message };
      const res = await axios.post(`${API_URL}/sendMail`, data);
      alert('Message Sent Successfully');
    } catch (error) {
      console.log(error);
      alert('Failed to send message');
    }
  };

  return (
    <>
      <div id='contact' className={`contact-page ${theme ? 'bg-light-theme' : 'bg-dark-theme'}`}>
        <h3 className='headings'>Contact me</h3>
        <div className='heading-span'>Get in touch</div>
        <div className="contact-container">
          <div className="left-contact-container">
            <h3>Find Me &nbsp; <FontAwesomeIcon icon={faTurnDown} /></h3>
            <a href='mailto:sarankumartsk@gmail.com'><FontAwesomeIcon icon={faEnvelope} />  &nbsp; Email&nbsp;&nbsp;: sarankumartsk@gmail.com</a>
            <a> <FontAwesomeIcon icon={faPhone} /> &nbsp; Phone : +91 8675750594</a>
          </div>
          <div className="right-contact-container">
            <div>
              <form onSubmit={handleMailer}>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' cols="30" rows="10"></textarea>
                <button className='mail-button' type='submit'>Send Mail&nbsp;&nbsp;<FontAwesomeIcon icon={faPaperPlane} /></button>
              </form>
            </div>
            <div className='contact-button'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;