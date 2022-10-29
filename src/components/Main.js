// === Components === //
import Button from './MainButton';
import GetSection from './GetSection';
import Data from './DataSection';
import Leaders from './LeadersSection';
import Power from './PowerSection';

import decor from '../img/main/car.png';

// === SCSS === //
import '../scss/main.scss';

const Main = () => {
   return (
      <main className='main'>
         <section className='banner'>
            <div className='banner__container'>
               <div className='banner__header'>
                  <h1>Connecting the curb to new insights</h1>
               </div>
               <div className='banner__description'>
                  <h6>Real-time curb data for smart cities. Measure occupancy, analyze demand, and manage curb space with the right tools.</h6>
                  <Button buttonText='Book a demo' />
               </div>
               <img src={decor} alt='Decor' className='decor' id='decor-1' />
               <img src={decor} alt='Decor' className='decor' id='decor-2' />
               <img src={decor} alt='Decor' className='decor' id='decor-3' />
            </div>
            <div className='banner__letterhead'>
               <p>We use cookies to provide you with the best website experience</p>
               <Button buttonText='Agree' />
            </div>
         </section>
         <GetSection />
         <Data />
         <Leaders />
         <Power />
      </main>
   );
};
export default Main;
