import React from 'react';
import ButtonAdd from './ButtonAdd';
import ButtonEdit from './ButtonEdit';
import ButtonRemove from './ButtonRemove';
import Button from './Button';
import Input from './Input';

const ItemList = (props) => {
	let {
		listName, 
		removeTaskFromList, 
		checkItemFromList,
		inputHandler,
		editTaskFromList,
		saveTaskFromList,
		addSubtaskToList,
		addSubtasktoItem
	} = props
	console.log(listName)
	return (
		<div className={ listName.completed ?  'itemList checked' : 'itemList' }>
			<div>
				<input type="checkbox" onChange={checkItemFromList} />
				<input 
					defaultValue={listName.task} 
					className={ listName.edit ?  'inputEdit' : 'inputDisabled' } 
					onChange={e => inputHandler(e.target)}
					name="editTask"
				/>
				{ listName.edit ? (
					<button className="ButtonAdd" onClick={saveTaskFromList}>Save</button>
				) : '' }
			</div>
			
			<div>
				<ButtonEdit clickHandler={editTaskFromList} value={listName.edit} />
				<ButtonAdd clickHandler={addSubtaskToList} value={listName.addNew} />
				<ButtonRemove clickHandler={removeTaskFromList} />
			</div>
			
			{ listName.addNew ? (
				<div className="formAddSubtask">
					<Input inputHandler={inputHandler} name="subtask" />
					<Button clickHandler={addSubtasktoItem} />
				</div>
			) : ''}
			<ul>
			{ 
				listName.subtasks.map((item, index) => {
					return <li className="itemSubtask">{item}</li>
				})
			}
			</ul>
			
		</div>
	)
}
export default ItemList;