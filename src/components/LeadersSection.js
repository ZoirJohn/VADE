// === Components === //
import Caption from './Caption';
import Text from './Text';

// === Img === //
import logo_1 from '../img/main/logotype-1.svg'
import logo_2 from '../img/main/logotype-2.svg'
import logo_3 from '../img/main/logotype-3.svg'
import logo_4 from '../img/main/logotype-4.svg'
import logo_5 from '../img/main/logotype-5.svg'
import logo_6 from '../img/main/logotype-6.svg'
import logo_7 from '../img/main/logotype-7.svg'
import logo_8 from '../img/main/logotype-8.svg'
import bigLogo from '../img/main/bigLogo.svg'

const Leaders = () => {
   return (
      <section className='leaders'>
         <div className='leaders__container'>
            <div className='leaders__body'>
               <Caption text='Trusted by leaders in urban transportation' />
               <Text text={`Transparency and quality are the basis of our work, and weve helped cities and vendors across the United States.`} />
           </div>
				<div className='leaders__chart'>
					<h4>Here's who we've worked with</h4>
					<img src={logo_1} alt="Logotype" />
					<img src={logo_2} alt="Logotype" />
					<img src={logo_3} alt="Logotype" />
					<img src={logo_4} alt="Logotype" />
					<img src={logo_5} alt="Logotype" />
					<img src={logo_6} alt="Logotype" />
					<img src={logo_7} alt="Logotype" />
					<img src={logo_8} alt="Logotype" />
				</div>
				<div className='leaders__description'>
					<p>Curb management can help ensure that curb space is allocated more equitably, providing access to this limited resource to all street users, including our most vulnerable.”</p>
					<div className='leaders__card'>

						<img src={bigLogo} alt="" />
						<p>San Francisco</p>
						<p>Municipal Transportation Agency</p>
					</div>
				</div>
         </div>
      </section>
   );
};

export default Leaders