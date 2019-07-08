import React from 'react';

const ButtonEdit = (props) => {
    let {clickHandler, value} = props;
    return (
		<button type="button" className="ButtonAdd" onClick={clickHandler}>
			{ value ?  'Cancel' : 'Edit' }
		</button>
	)
}

export default ButtonEdit;