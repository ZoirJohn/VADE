// === Components === //
import { Component } from 'react';
import Header from './components/Header';

// === SCSS === //
import './scss/style.scss';

class App extends Component {
   render() {
      return (
         <div className='wrapper'>
            <Header />
         </div>
      );
   }
}

export default App;
