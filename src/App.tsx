import React from 'react';
import { useState, useEffect } from 'react';
import TodoContainer from './containers/TodoContainer';

function App() {
   //get data from localstorage
   const getItems = () =>{
    let list= localStorage.getItem('List');
    console.log(list)
    if (list) {
      return JSON.parse(localStorage.getItem('List') || '{}')
    }else{
      return []
    }
  }

  const [tasks, setTasks] = useState(getItems())
  const addItem: AddItem = newItem => {
    if (newItem !== ""){
      setTasks([...tasks, {text: newItem, complete: false}])
    }
  }

  const toggleComplete: ToggleComplete = selectedTodo =>{
    const updateTodoList = tasks.map( (task: { complete: any; text?: string; }) => {
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
    setTasks(tasks.filter((task: { text: string; })=>{
      return task.text != taskToDelete
    }))
  }
  const handleRemoveAll: HandleRemoveAll = arrayToDelete => {
    if (tasks === arrayToDelete){
      setTasks([]);
    }
  }
  //save items in localstorage
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(tasks));
  }, [tasks]);
 

  return (
    <div> 
      <TodoContainer tasks={tasks} toggleComplete={toggleComplete} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} addItem={addItem}/>
    </div>
  );
}

export default App;
