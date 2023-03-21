import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section error'>
      <div className='section-center container'>
        <h2 className='error-heading'>Oops! We can't find that page</h2>
        <Link to={'/'} className='hero-cta'>
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
