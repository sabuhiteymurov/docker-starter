import FeaturedProjects from '../components/FeaturedProjects';

const Projects = () => {
  return (
    <section className='projects section'>
      <div className='section-title'>
        <h2>Projects</h2>
        <div className='underline'></div>
      </div>
      <div className='projects-center container'>
        <FeaturedProjects />
        <div className='small-projects'>
          <div className='small-project'>
            <h4 className='small-project-title'>6IX Production</h4>
            <a
              href='https://6ix.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='small-project-button'
            >
              View app
            </a>
          </div>
          <div className='small-project'>
            <h4 className='small-project-title'>Sentence Generator</h4>
            <a
              href='https://sentencegenerator.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='small-project-button'
            >
              View app
            </a>
          </div>
          <div className='small-project'>
            <h4 className='small-project-title'>Stripe clone</h4>
            <a
              href='https://stripeheroclone.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='small-project-button'
            >
              View app
            </a>
          </div>
          <div className='small-project'>
            <h4 className='small-project-title'>Where am I</h4>
            <a
              href='https://what-is-your-location.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
              className='small-project-button'
            >
              View app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
