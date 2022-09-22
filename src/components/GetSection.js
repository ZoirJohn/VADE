// === Components === //
import Caption from './Caption';
import Card from './GetCard';

// === SCSS === //
import '../scss/main.scss';

// === PHOTOS === //
import background from '../img/main/camera.png'
import satellite from '../img/main/satellite.svg'
import barrel from '../img/main/barrel.svg'
import statistics from '../img/main/statistics.svg'

const GetSection = () => {
   return (
      <section className='get'>
         <div className='get__container'>
            <div className='get__body'>
               <Caption text='Get to know the curb better' />
               <p>Vade replaces legacy parking infrastructure with wireless cameras, computer vision, and granular analytics. We make it easy for cities to monitor and manage curb space in real-time.</p>
					<a href="#">More about our technology</a>
				</div>
				<div className='get__img'>
					<img src={background} alt="Picture" />
				</div>
				<div className='get__cards'>
					<Card img={satellite} heading='Fully wireless hardware' text='We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.'/>
					<Card img={barrel} heading='Real-time data' text='Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.'/>
					<Card img={statistics} heading='Full service subscription' text='One subscription for the cameras, installation, maintenance, implementation, software, and support.'/>
				</div>
         </div>
      </section>
   );
};
export default GetSection;
