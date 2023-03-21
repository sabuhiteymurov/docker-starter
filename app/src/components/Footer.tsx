import { useEffect, useState } from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';

const Footer = () => {
  const fullYear = new Date().getFullYear();
  const [year, setYear] = useState(fullYear);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <footer className='footer'>
      <div>
        <div className='footer-links social-links'>
          <a
            className='social-link'
            href='https://www.linkedin.com/in/sabuhi-teymurov/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin />
          </a>
          <a
            className='social-link'
            href='https://github.com/sabuhiteymurov'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub />
          </a>
          <a
            className='social-link'
            href='https://twitter.com/mr_teymurov'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillTwitterSquare />
          </a>
          <a
            className='social-link'
            href='https://www.facebook.com/teymurov'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillFacebook />
          </a>
          <a
            className='social-link'
            href='https://instagram.com/teymurov740'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram />
          </a>
        </div>
        <h4 className='footer-heading'>
          Copyright © {year}{' '}
          <a
            href='https://github.com/sabuhiteymurov'
            target={'_blank'}
            rel='noreferrer'
          >
            Sabuhi Teymurov
          </a>{' '}
          All rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
