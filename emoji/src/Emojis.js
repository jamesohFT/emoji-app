import React from 'react';

function Emojis (props) {
	return props.parentState.map(function(number){
		return (
			<span>{number}</span>
		)
	})
}

export default Emojis;