// Components
import Post from './Posts';
import Button from './MainButton';

const Posts = () => {
   return (
      <section className='posts'>
         <div className='container'>
            <h1></h1>
				<div className='posts__body'>
					<Post/>
					<Post/>
					<Post/>
				</div>
            <Button />
         </div>
      </section>
   );
};

export default Posts;
