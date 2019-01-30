import React from 'react';

const Card = (props) => {
	return(
		<div className="bg-light-green pa3 ma3 dib grow shadow-5 br3">
			<img src={`https://robohash.org/${props.id}`} alt="robot" width="250px" />
			<div>
				<h3>{props.name}</h3>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;