import Link from './HeaderLink';
import logo from '../img/header/logo.svg';

import '../scss/header.scss';

const Header = () => {
   return (
      <header className='header'>
         <div className='header__container'>
            <div className='header__logo logo'>
               <img src={logo} alt='Logotype' />
            </div>
            <nav className='header__nav nav'>
               <ul className='header__menu menu'>
                  <Link linkText={'technology'} />
                  <Link linkText={'about us'} />
                  <Link linkText={'impact'} />
                  <Link linkText={'portfolio'} />
                  <Link linkText={'blog'} />
						<li className='nav__button'>
                     <a href='#' >book a demo</a>
                  </li>
               </ul>
            </nav>
            <div className='burger'></div>
         </div>
      </header>
   );
};

export default Header;
