import React from 'react';
import ItemList from './ItemList';

const Content = (props) => {
	let {
		listItems, 
		removeTaskFromList, 
		checkItemFromList,
		inputHandler,
		editTaskFromList,
		saveTaskFromList,
		addSubtaskToList,
		addSubtasktoItem
	} = props
	
	let listContent = listItems.map((item, index) => {
		return(
			<ItemList 
				key={index} 
				listName={item} 
				removeTaskFromList={()=> {removeTaskFromList(index)}} 
				checkItemFromList={()=> {checkItemFromList(index)}} 
				inputHandler={inputHandler}
				editTaskFromList={()=> {editTaskFromList(index)}} 
				saveTaskFromList={()=> {saveTaskFromList(index)}}
				addSubtaskToList={()=> {addSubtaskToList(index)}}
				addSubtasktoItem={()=> {addSubtasktoItem(index)}}
			/>
		)
	});

	return (
		<div className="taskContainer">
			{listContent}
		</div>
	)
}

export default Content;