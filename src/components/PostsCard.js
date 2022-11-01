// Components

const CardPosts = (props) => {
   <div className='PostCard card'>
      <img src={props.img} alt='Card-image' />
      <div className='card__body'>
         <h4 className='card__text'>{props.text}</h4>
         <p className='card__date'>{props.date}</p>
      </div>
   </div>;
};

export default Posts
