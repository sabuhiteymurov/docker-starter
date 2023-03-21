import { pickpockImg, maptyImg, portfolioImg, noteZoneImg } from '../img/index';
import { FaExternalLinkSquareAlt, FaGithubSquare } from 'react-icons/fa';

const FeaturedProjects = () => {
  return (
    <>
      <article className='project'>
        <div className='project-img animate__animated animate__bounceInLeft'>
          <img src={pickpockImg} alt='Pickpock project' />
        </div>
        <div className='project-info animate__animated animate__bounceInRight'>
          <span className='project-number'>01</span>
          <a
            href='https://pickpock.netlify.app/'
            className='project-title'
            target={'_blank'}
            rel='noreferrer'
          >
            <h3>PickPock</h3>
          </a>
          <p className='project-description'>
            Most people are very busy with their jobs, family and friends, and
            other important activities, which doesn't leave much time for
            shopping. I want to solve this problem by using an AI-centric
            approach. Users can use this app to select products from brands
            which they like and dislike, and AI algorithm will create a custom
            and individual monthly boxes just for them.
          </p>
          <div className='project-stack'>
            <span>vanilla js</span>
            <span>advanced scss</span>
            <span>mvc pattern</span>
          </div>
          <div className='project-links'>
            <a
              href='https://github.com/sabuhiteymurov/PickPock'
              target={'_blank'}
              className='project-links__icon'
              rel='noreferrer'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://pickpock.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </article>
      <article className='project'>
        <div className='project-img project-img-right animate__animated animate__bounceInRight'>
          <img src={maptyImg} alt='Mapty project' />
        </div>
        <div className='project-info project-info-left animate__animated animate__bounceInLeft'>
          <span className='project-number'>02</span>
          <a
            href='https://mapty-dev-sabuhi.netlify.app/'
            className='project-title'
            target={'_blank'}
            rel='noreferrer'
          >
            <h3>Mapty V2</h3>
          </a>
          <p className='project-description'>
            App features: Double click map to add Cycling or Running workout on
            map. Each workout can be edited and deleted. User can view workouts
            by certain categories (cycling, running). User can sort workouts by
            certain fields(distance, duration). When click on each workout map
            will auto show the location on map. User can click icon on map to
            show all workouts, delete all workouts.
          </p>
          <div className='project-stack'>
            <span>parcel</span>
            <span>leaflet</span>
            <span>geocode api</span>
          </div>
          <div className='project-links'>
            <a
              href='https://github.com/sabuhiteymurov/Mapty'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://mapty-dev-sabuhi.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </article>
      <article className='project'>
        <div className='project-img animate__animated animate__bounceInLeft'>
          <img src={portfolioImg} alt='My portfolio website' />
        </div>
        <div className='project-info animate__animated animate__bounceInRight'>
          <span className='project-number'>03</span>
          <a
            href='https://sabuhiteymurov.netlify.app/'
            className='project-title'
            target={'_blank'}
            rel='noreferrer'
          >
            <h3>Portfolio</h3>
          </a>
          <p className='project-description'>
            I developed my portfolio website with my own design concepts using
            ReactJs, React router, Rsuite components library, and advanced
            SCSS/animations. The website will be updated over time, especially
            the projects section.
          </p>
          <div className='project-stack'>
            <span>React</span>
            <span>React Router</span>
            <span>Rsuite</span>
          </div>
          <div className='project-links'>
            <a
              href='https://github.com/sabuhiteymurov/my-portfolio'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://sabuhiteymurov.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </article>
      <article className='project'>
        <div className='project-img project-img-right animate__animated animate__bounceInRight'>
          <img src={noteZoneImg} alt='NoteZone project' />
        </div>
        <div className='project-info project-info-left animate__animated animate__bounceInLeft'>
          <span className='project-number'>04</span>
          <a
            href='https://notezone-demo.netlify.app'
            className='project-title'
            target={'_blank'}
            rel='noreferrer'
          >
            <h3>NoteZone</h3>
          </a>
          <p className='project-description'>
            NoteZone is a place for your personal notes, studies, diaries, and
            ideas. You can access your notes from every platform. Currently
            under development, NoteZone app and web app will be online anytime
            soon...
          </p>
          <div className='project-stack'>
            <span>React</span>
            <span>NodeJS</span>
            <span>Redux</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
          <div className='project-links'>
            <a
              href='https://github.com/sabuhiteymurov/'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://notezone-demo.netlify.app'
              target={'_blank'}
              rel='noreferrer'
              className='project-links__icon'
            >
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default FeaturedProjects;
