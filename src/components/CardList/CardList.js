import React from 'react';
import Card from '../Card/Card';

const CardList = ({robots}) => {
	return(
		robots.map((user, i) => {
			return(
				<Card 
					name={robots[i].name}
					email={robots[i].email}
					id={robots[i].id}
					key={i}
				/>
			);
		})
	);	
}


export default CardList;