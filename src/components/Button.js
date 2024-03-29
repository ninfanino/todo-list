import React from 'react';

const Button = (props) => {
	let {clickHandler} = props;
	return (
		<button type="button" className="button" onClick={clickHandler}>
			Ok
		</button>
	)
}

export default Button;