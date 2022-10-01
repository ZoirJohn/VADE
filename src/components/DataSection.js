// === Components === //
import Caption from './Caption';
import Text from './Text';

// === Images === //
import diagram from '../img/main/diagram.png';

const Data = () => {
   return (
      <section class='data'>
         <div class='data__container'>
            <div class='data__body'>
               <Caption text='Collect, analyze, and visualize occupancy data' />
               <Text text='Visualize demand with dashboards for curb utilization and compliance.' />
            </div>
            <img src={diagram} alt='Diagram' />
         </div>
      </section>
   );
};

export default Data;
