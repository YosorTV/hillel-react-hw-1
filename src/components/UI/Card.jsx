import React from 'react';

const Card = ({ img, name }) => {

return (
	<figure>
		<img src={img} alt="photo" />
			<figcaption>
				<h3>{name}</h3>
			</figcaption>
	</figure>
	)
}

export default Card;