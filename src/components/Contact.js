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
    <form className='row g-3 align-items-center' ref={form} onSubmit={sendEmail}>
      <label className='form-label fs-3 fw-bold text-decoration-underline'>Name</label>
      <input type="text" name="user_name" />
      <label className='form-label fs-3 fw-bold text-decoration-underline'>Email</label>
      <input type="email" name="user_email" />
      <label className='form-label fs-3 fw-bold text-decoration-underline'>Message</label>
      <textarea name="message" />
      <input className='btn btn-secondary m-2' type="submit" value="Send" />
    </form>
  );
};