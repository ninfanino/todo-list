import React from 'react';

const ButtonAdd = (props) => {
	let {clickHandler, value} = props;
	return (
		<button type="button" className="ButtonAdd" onClick={clickHandler}>
			{ value ?  'Cancel' : 'Add task' }
		</button>
	)
}

export default ButtonAdd;