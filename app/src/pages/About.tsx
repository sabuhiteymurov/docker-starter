// @ts-nocheck
import React, { useRef, useState } from 'react';
import ilAbout from '../img/il-about.png';
import {
  iconHtml,
  iconCss,
  iconJs,
  iconReact,
  iconSass,
  iconTypescript,
  iconRedux,
  iconFigma,
  iconPython,
  iconGit,
  iconAnimation,
  iconResponsive,
  iconNpm,
  iconNextJs,
} from '../img/icons/index';

const About = () => {
  const generalInfo =
    "Hi there, my name is Sabuhi Teymurov. I'm a motivated individual with over one year of experience as a JavaScript developer. I continuously improve myself and learn new technologies everyday. My journey with software development started back in March 2019 with the Python programming language. In summer 2021, I started to learn Web Development.";

  const goalsInfo =
    'My current goal is to increase my knowledge and gain more professional practice in the field. I tend to use best practices whenever possible.';

  const [info, setInfo] = useState(generalInfo);
  const generalInfoBtn = useRef();
  const goalsInfoBtn = useRef();

  const handleClick = (e: React.MouseEvent<HTMLElement>, type: string) => {
    if (type === 'general') {
      setInfo(generalInfo);
      generalInfoBtn.current.classList.add('btn__active');
    } else {
      setInfo(goalsInfo);
      goalsInfoBtn.current.classList.add('btn__active');
    }
  };

  return (
    <>
      <section className='about'>
        <div className='section-title' style={{ marginBottom: '4.4rem' }}>
          <h2>About</h2>
          <div className='underline'></div>
        </div>
        <div className='about-center container'>
          <div className='about-info'>
            <button
              className='about-info__btn btn--left btn__active'
              onClick={(e) => {
                handleClick(e, 'general');
              }}
              ref={generalInfoBtn}
            >
              General
            </button>
            <button
              className='about-info__btn btn--right'
              onClick={(e) => {
                handleClick(e, 'goals');
              }}
              ref={goalsInfoBtn}
            >
              Goals
            </button>
            <p>{info}</p>
          </div>
          <img src={ilAbout} alt='Illustration gif' className='about-il' />
        </div>
      </section>
      <section className='skills-section'>
        <div className='skills-container'>
          <div className='section-title'>
            <h2>Skills</h2>
            <div className='underline'></div>
          </div>
          <div className='skills grid grid--3-cols'>
            <article className='skill'>
              <img className='skill-icon' src={iconHtml} alt='HTML icon' />
              <h3 className='skill-title'>HTML 5</h3>
              <div className='skill-progress progress-html'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconCss} alt='CSS icon' />
              <h3 className='skill-title'>CSS 3</h3>
              <div className='skill-progress progress-css'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconJs} alt='JS icon' />
              <h3 className='skill-title'>JavaScript</h3>
              <div className='skill-progress progress-js'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconReact} alt='React icon' />
              <h3 className='skill-title'>React.js</h3>
              <div className='skill-progress progress-react'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconNextJs} alt='React icon' />
              <h3 className='skill-title'>Next.js</h3>
              <div className='skill-progress progress-nextjs'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconSass} alt='Sass icon' />
              <h3 className='skill-title'>Sass</h3>
              <div className='skill-progress progress-sass'></div>
            </article>
            <article className='skill'>
              <img
                className='skill-icon'
                src={iconTypescript}
                alt='TypeScript icon'
              />
              <h3 className='skill-title'>TypeScript</h3>
              <div className='skill-progress progress-typescript'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconRedux} alt='Redux icon' />
              <h3 className='skill-title'>Redux</h3>
              <div className='skill-progress progress-redux'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconGit} alt='Git icon' />
              <h3 className='skill-title'>Git</h3>
              <div className='skill-progress progress-git'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconFigma} alt='Figma icon' />
              <h3 className='skill-title'>Figma</h3>
              <div className='skill-progress progress-figma'></div>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconPython} alt='Python icon' />
              <h3 className='skill-title'>Python</h3>
              <div className='skill-progress progress-python'></div>
            </article>
            <article className='skill'>
              <img
                className='skill-icon'
                src={iconAnimation}
                alt='Animations icon'
              />
              <h3 className='skill-title'>
                Animations
                <br />
                (Keyframes/Css)
              </h3>
            </article>
            <article className='skill'>
              <img
                className='skill-icon'
                src={iconResponsive}
                alt='Responsive Design icon'
              />
              <h3 className='skill-title'>
                Responsive Web
                <br />
                Design
              </h3>
            </article>
            <article className='skill'>
              <img className='skill-icon' src={iconNpm} alt='NPM icon' />
              <h3 className='skill-title'>NPM</h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
