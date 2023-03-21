import { Link } from 'react-router-dom';
import { ilHero, ilService1, ilService2, ilService3 } from '../img/index';
import FeaturedProjects from '../components/FeaturedProjects';
import 'animate.css';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <main>
        <section className='hero'>
          <div className='section-center container'>
            <article className='hero-info'>
              <div className='hero-info__underline animate__animated animate__bounceInLeft'></div>
              <h1 className='hero-info__heading animate__animated animate__bounceInLeft'>
                I'm Sabuhi
              </h1>
              <h4 className='heading-description animate__animated animate__bounceInLeft'>
                Software Developer
              </h4>
              <Link to='/contact' className={'hero-cta '}>
                Contact Me
              </Link>
              <div className='social-links'>
                <a
                  className='social-link '
                  href='https://www.linkedin.com/in/sabuhi-teymurov/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className='social-link '
                  href='https://github.com/sabuhiteymurov'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillGithub />
                </a>
                <a
                  className='social-link '
                  href='https://twitter.com/mr_teymurov'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillTwitterSquare />
                </a>
                <a
                  className='social-link '
                  href='https://www.facebook.com/teymurov'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillFacebook />
                </a>
                <a
                  className='social-link '
                  href='https://instagram.com/teymurov740'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillInstagram />
                </a>
              </div>
            </article>
            <img src={ilHero} alt='' className='hero-img' width={520} />
          </div>
        </section>
        <section className='services section'>
          <div className='section-title'>
            <h2>Services</h2>
            <div className='underline'></div>
          </div>
          <div className='services-center container'>
            <div className='service'>
              <img
                src={ilService1}
                alt='service-1 gif'
                className='service-il'
              />
              <h4 className='service-title'>Web Development</h4>
              <div className='service-underline'></div>
              <p className='service-paragraph'>
                I have a wide range of abilities as a web developer, including
                analytical and interpersonal abilities to develop and build
                functional websites and adjust to any changes that my clients
                request.
              </p>
            </div>
            <div className='service'>
              <img
                src={ilService2}
                alt='service-2 gif'
                className='service-il'
              />
              <h4 className='service-title'>Web Design</h4>
              <div className='service-underline'></div>
              <p className='service-paragraph'>
                I can design the appearance, layout, content, and visual
                hierarchy of a website. I can implement responsive and adaptive
                design into a website.
              </p>
            </div>
            <div className='service'>
              <img
                src={ilService3}
                alt='service-3 gif'
                className='service-il'
              />
              <h4 className='service-title'>
                Website Support &amp; Maintenance{' '}
              </h4>
              <div className='service-underline'></div>
              <p className='service-paragraph'>
                As a web developer, I can continuously test webpages for any
                possible errors. I can consistently and effectively test and
                debug any webpage.
              </p>
            </div>
          </div>
        </section>
        <section className='projects section'>
          <div className='section-title'>
            <h2>Featured Projects</h2>
            <div className='underline'></div>
          </div>
          <div className='projects-center container'>
            <FeaturedProjects />
            <div className='projects-cta'>
              <Link to='/projects' className={'hero-cta'}>
                All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
