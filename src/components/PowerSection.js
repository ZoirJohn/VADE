// === Components === //
import Caption from './Caption';
import Button from './MainButton';
// === Images === //
import buildings from '../img/main/buildings.png';

const Power = () => {
   return (
      <section className='power'>
         <div className='power__container'>
            <Caption text='Power up the future of cities' />
            <div className='power__body'>
               <p className='power__title'>We're building a new paradigm of urban mobility that understands and adapts to the world around it. We empower cities with dynamic tools to make streets safer, less congested, and more productive.</p>
               <div className='power__rest'>
                  <p>Read more on how we’re improving transportation on our Impact page.</p>
						<Button buttonText='Social impact' />
               </div>
            </div>
         </div>
         <img src={buildings} alt='buildings' />
      </section>
   );
};

export default Power;
