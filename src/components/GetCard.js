const Card = (props) => {
	return <div className="getCard">
		<img src={props.img} alt="Icon" />
		<h4>{props.heading}</h4>
		<p>{props.text}</p>
	</div>
}
export default Card;