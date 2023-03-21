// @ts-nocheck
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
  const naviToggle = useRef();
  const handleClick = () => (naviToggle.current.checked = false);
  const toggleMobileNav = () =>
    (naviToggle.current.checked = !naviToggle.current.checked);

  return (
    <div className='mobile-navigation display-mobile'>
      <input
        type='checkbox'
        className='mobile-navigation__checkbox'
        ref={naviToggle}
      />
      <label
        htmlFor='navi-toggle'
        className='mobile-navigation__button'
        onClick={toggleMobileNav}
      >
        <span className='mobile-navigation__icon'>&nbsp;</span>
      </label>
      <div className='mobile-navigation__overlay'>&nbsp;</div>
      <nav className='mobile-navigation__nav'>
        <ul className='mobile-navigation__list'>
          <li className='mobile-navigation__item'>
            <NavLink
              to={'/'}
              className='mobile-navigation__link'
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className='mobile-navigation__item'>
            <NavLink
              to={'/about'}
              className='mobile-navigation__link'
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className='mobile-navigation__item'>
            <NavLink
              to={'/projects'}
              className='mobile-navigation__link'
              onClick={handleClick}
            >
              Projects
            </NavLink>
          </li>
          <li className='mobile-navigation__item'>
            <NavLink
              to={'/contact'}
              className='mobile-navigation__link'
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
