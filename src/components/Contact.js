import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fm06g8p', 'template_xeuwv8e', form.current, 'tc8d9umeBvkCa4kIc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='row g-3 align-items-center p-3 m-3' ref={form} onSubmit={sendEmail}>
      <label className='form-label input-title fs-3 fw-bold text-decoration-underline'>Name</label>
      <input className='input-field' type="text" name="user_name" />
      <label className='form-label input-title fs-3 fw-bold text-decoration-underline'>Email</label>
      <input className='input-field' type="email" name="user_email" />
      <label className='form-label input-title fs-3 fw-bold text-decoration-underline'>Message</label>
      <textarea className='input-field' name="message" />
      <input  className="navbutton2 m-2 p-3" type="submit" value="Send" />
    </form>
  );
};