// === Components === //
import Caption from './Caption';

// === Images === //
import buildings from '../img/main/buildings.png'

const Power = () => {
   return (
      <div className='power'>
         <div className='power__container'>
            <Caption text='Power up the future of cities' />
            <div className='power__body'>
               <p className='power__title' >We're building a new paradigm of urban mobility that understands and adapts to the world around it. We empower cities with dynamic tools to make streets safer, less congested, and more productive.</p>
               <div className='power__rest'>
                  <p>Read more on how we’re improving transportation on our Impact page.</p>
                  <a href='#'>Social impact</a>
               </div>
				</div>
         </div>
				<img src={buildings} alt="buildings" />
      </div>
   );
};

export default Power;
