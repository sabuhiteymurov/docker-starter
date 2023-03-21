import { useState, useRef } from 'react';
import { ilContact } from '../img/index';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputText = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (name && email && message) {
      if (inputName.current && inputEmail.current && inputText.current) {
        inputName.current.classList.remove('btn-error');
        inputEmail.current.classList.remove('btn-error');
        inputText.current.classList.remove('btn-error');
      }
      if (form.current) {
        form.current.submit();
      }
    } else {
      if (inputName.current && inputEmail.current && inputText.current) {
        name
          ? inputName.current.classList.remove('btn-error')
          : inputName.current.classList.add('btn-error');
        email
          ? inputEmail.current.classList.remove('btn-error')
          : inputEmail.current.classList.add('btn-error');
        message
          ? inputText.current.classList.remove('btn-error')
          : inputText.current.classList.add('btn-error');
        return false;
      }
    }
  };

  return (
    <section className='contact'>
      <div className='contact-section section container'>
        <div className='section-title' style={{ marginBottom: '4.4rem' }}>
          <h2>Contact</h2>
          <div className='underline'></div>
        </div>
        <div className='section-content'>
          <form
            name='contact-form'
            method='POST'
            data-netlify='true'
            className='contact-form'
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            ref={form}
          >
            {' '}
            <div className='contact-form-content'>
              <input type='hidden' name='form-name' value='contact-form' />
              <input
                type='text'
                name='name'
                placeholder='Full Name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={inputName}
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={inputEmail}
              />
              <textarea
                name='message'
                rows={5}
                placeholder='Message'
                className='form-control'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ref={inputText}
              ></textarea>
            </div>
            <button type='submit' className='contact-form-btn btn hero-cta'>
              Submit here
            </button>
          </form>
          <img
            src={ilContact}
            alt='Contact illustration'
            className='contact-il'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
