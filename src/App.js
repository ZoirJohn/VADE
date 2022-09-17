// === Components === //
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

// === SCSS === //
import './scss/style.scss';

class App extends Component {
   render() {
      return (
         <div className='wrapper'>
            <Header />
            <Main />
         </div>
      );
   }
}

export default App;
