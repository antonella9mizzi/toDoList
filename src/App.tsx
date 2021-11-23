import React from 'react';
import { useState } from 'react';
import TodoList from './containers/TodoList';
import data from './data.json';
import TodoContainer from './containers/TodoContainer';
function App() {
  const [tasks, setTasks] = useState<Array<Task>>([])
  const addItem: AddItem = newItem => {
    if (newItem !== ""){
      setTasks([...tasks, {text: newItem, complete: false}])
    }
  }
  const toggleComplete: ToggleComplete = selectedTodo =>{
    const updateTodoList = tasks.map( task => {
        if (task === selectedTodo){
          return (
            {...task, complete: !task.complete}
          )
        }
        return(task)
      });
      setTasks(updateTodoList)
  }
  const handleRemove: HandleRemove = taskToDelete => {
    setTasks(tasks.filter((task)=>{
      return task.text != taskToDelete
    }))
  }
  return (
    <div> 
      <h1>Todo list</h1>
      <TodoList addItem={addItem}/>
      <TodoContainer tasks={tasks} toggleComplete={toggleComplete} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
