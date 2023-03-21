import { BiLoaderAlt } from 'react-icons/bi';
import { loadingIl } from '../img/index';

const Loading = () => {
  return (
    <section className='loading-section'>
      <img
        src={loadingIl}
        alt='loading-animation'
        className='loading-animation'
      />
      <div className='loader-container'>
        <BiLoaderAlt className='loader' />
        <h2 className='loader-heading'>You are almost here!</h2>
      </div>
    </section>
  );
};

export default Loading;
