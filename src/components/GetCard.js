const Card = (props) => {
	return <div className="getCard">
		<img src={props.img} alt="Icon" />
		<h4>{props.heading}</h4>
		<h4>{props.text}</h4>
	</div>
}
export default Card;