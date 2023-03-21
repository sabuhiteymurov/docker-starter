import { NavLink, useNavigate } from 'react-router-dom';

import { logo } from '../img/index';
import MobileNav from './MobileNav';

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <header className='navbar'>
      <div className='navbar-center'>
        <div className='navbar-center-logo'>
          <img
            src={logo}
            className='navbar-center-logo__img'
            alt='header logo'
            width={'250'}
            height={'90'}
          />
        </div>
        <MobileNav />
        <nav className='nav-links display-desktop'>
          <ul>
            <li>
              <NavLink className={'nav-link'} to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={'nav-link'} to={'/about'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={'nav-link'} to={'/projects'}>
                Projects
              </NavLink>
            </li>
            <li>
              <button
                className='cybr-btn'
                type='button'
                onClick={() => {
                  navigate('/contact');
                }}
              >
                <NavLink to={'/contact'} className={'cta-link'}>
                  Contact
                </NavLink>
                <span className='cybr-btn__glitch'>Contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarComponent;
