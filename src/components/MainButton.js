import { useState } from 'react';

const Button = (props) => {
   let [word, setWord] = useState(props.buttonText);

   const rewrite = (e) => {
      e.preventDefault();
      setWord(word === 'Clicked!' ? (word = props.buttonText) : (word = 'Clicked!'));
      const element = e.target;
      console.log(element.classList.toggle('clicked')); //;
   };

   return (
      <a href='#' className='HTMLmyAnchor' onClick={rewrite}>
         {word}
      </a>
   );
};
export default Button;
