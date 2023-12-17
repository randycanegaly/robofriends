import React from 'react';

const Card = ({name, email, id }) => {
	return (
		// <>
		// <h1>RoboFriend</h1>
			<div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'> 
				{/*bg-light-green is a pre-built style from tachyons*/}
				<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		// </>
	);
}

export default Card;