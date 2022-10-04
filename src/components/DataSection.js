// === Components === //
import Caption from './Caption';
import Text from './Text';

// === Images === //
import diagram from '../img/main/diagram.png';

const Data = () => {
   return (
      <section className='data'>
         <div className='data__container'>
            <div className='data__body'>
               <Caption text='Collect, analyze, and visualize occupancy data' />
               <Text text='Visualize demand with dashboards for curb utilization and compliance.' />
            </div>
            <img src={diagram} alt='Diagram' />
         </div>
      </section>
   );
};

export default Data;
