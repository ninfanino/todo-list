import React from 'react';

const Input = (props) => {
	let {inputHandler, name} = props
	return (
		<input 
			type="text" 
			placeholder="New task.." 
			className="input" 
			name={name} 
			onChange={e => inputHandler(e.target)}
		/>
	)
}

export default Input;