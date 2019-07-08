import React from 'react';
import Input from './Input';
import Button from './Button';

const Header = (props) => {
	let {inputHandler, taskValue, clickHandler, showAddTask, addTask} = props;
	
	return (
		<div className="card">
			<h1 className="title">To Do List</h1>
			
			<div className="containerAddTask">
				<button onClick={showAddTask} className={addTask ? 'btnAdd open' : 'btnAdd' }>
					<div className="linesButton">
						<span></span>
						<span></span>
					</div>
					{addTask ? 'Cancel' : 'Add new' }
				</button>
				{addTask ? (
					<div className="formAddTask">
						<Input inputHandler={inputHandler} taskValue={taskValue} name="task" />
						<Button clickHandler={clickHandler} />
					</div>
				) : ''}
			</div>
			
		</div>
	)
}

export default Header;