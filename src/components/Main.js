// === Components === //
import decor from '../img/main/car.png';

// === SCSS === //
import '../scss/main.scss';

const OnClickAnchor = (e) => {
   e.preventDefault();
   alert('Всё ok :)');
};

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
                  <a href='#' onClick={OnClickAnchor}>
                     Book a demo
                  </a>
               </div>
               <img src={decor} alt='Decor' className='decor' id='decor-1' />
               <img src={decor} alt='Decor' className='decor' id='decor-2' />
               <img src={decor} alt='Decor' className='decor' id='decor-3' />
            </div>
         </section>
      </main>
   );
};
export default Main;
