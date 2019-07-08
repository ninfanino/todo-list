import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      list : [],
      addTask: false,
      editTask: '',
      newTask: ''
    }
  }

  showAddTask = () => {
    this.setState({
      addTask: !this.state.addTask
    })
  }

  updateAttribute = (e) =>{
    this.setState({[e.name]: e.value})
  }

  addTaskToList = () => {
    let newList = this.state.list;

    newList.push({
      task: this.state.task,
      subtasks: [],
      completed:false,
      edit: false,
      addNew: false
    })

    this.setState({
      task:'',
      addTask: false,
      list: newList
    })
  }

  removeTaskFromList = (index) => {
    let newList = this.state.list;

    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }

  editTaskFromList = (index) => {
    
    let newList = this.state.list;
    newList[index].edit = !newList[index].edit

    this.setState({
      list: newList
    })
    
  }

  saveTaskFromList = (index) => {
    let newList = this.state.list;
    newList[index].task = this.state.editTask;
    newList[index].edit = false

    this.setState({
      list: newList,
      editTask: ''
    })
    console.log(newList)
  }

  checkItemFromList = (index) => {
    let newList = this.state.list;
    newList[index].completed = !newList[index].completed

    this.setState({
      list: newList
    })
  }

  addSubtaskToList = (index) => {
    let newList = this.state.list;
    newList[index].addNew = !newList[index].addNew

    this.setState({
      list: newList
    })
  }

  addSubtasktoItem = (index) => {
    let newList = this.state.list;
    let newTasks = newList[index].subtasks;
    newList[index].addNew = false

    newTasks.push(
      this.state.subtask
    )

    this.setState({
      list: newList
    })
    
  }

  render() {
    return (
      <div className="container">
        <Header 
          showAddTask={this.showAddTask} 
          addTask={this.state.addTask} 
          inputHandler={this.updateAttribute} 
          taskValue={this.state.task} 
          clickHandler={this.addTaskToList}
          />
        <Content 
          inputHandler={this.updateAttribute} 
          editTaskFromList={this.editTaskFromList}
          listItems={this.state.list} 
          removeTaskFromList={this.removeTaskFromList} 
          checkItemFromList={this.checkItemFromList}
          saveTaskFromList={this.saveTaskFromList}
          addSubtaskToList={this.addSubtaskToList}
          addSubtasktoItem={this.addSubtasktoItem}
        />
      </div>
    );
  }
}

export default App;
