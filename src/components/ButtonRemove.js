import React from 'react';

const ButtonRemove = (props) => {
	let {clickHandler} = props;
	return (
		<button type="button" className="ButtonRemove" onClick={clickHandler}>
			Delete
		</button>
	)
}

export default ButtonRemove;