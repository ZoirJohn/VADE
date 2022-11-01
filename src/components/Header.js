// === Components === //
import Link from './HeaderLink';

// === Photos === //
import logo from '../img/header/logo.svg';

// === SCSS === //
import '../scss/header.scss';

const navbarFunction = () => {
   const nav = document.querySelector('.header__nav');
   const burger = document.querySelector('.burger');

   nav.classList.toggle('active_');
   burger.classList.toggle('active_');
   nav.closest('body').classList.toggle('active_');
};

const magicHeader = () => {
   console.log(300);
};

const Header = () => {
   return (
      <header className='header'>
         <div className='header__container'>
            <a href='../public/index.html' className='header__logo logo'>
               <img src={logo} alt='Logotype' />
            </a>
            <nav className='header__nav nav'>
               <ul className='header__menu menu'>
                  <Link linkText={'technology'} />
                  <Link linkText={'about us'} />
                  <Link linkText={'impact'} />
                  <Link linkText={'portfolio'} />
                  <Link linkText={'blog'} />
                  <li className='nav__button'>
                     <a href='#'>book a demo</a>
                  </li>
               </ul>
            </nav>
            <div className='burger' onClick={navbarFunction}>
               <span className='burger__icon'></span>
            </div>
         </div>
      </header>
   );
};

export { Header, magicHeader };
