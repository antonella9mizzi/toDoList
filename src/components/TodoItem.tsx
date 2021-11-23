import React from "react";

interface TodoItemProps {
    task: Task,
    toggleComplete: ToggleComplete,
    handleRemove(taskToDelete:string): void,
};
const TodoItem: React.FC<TodoItemProps>= ({task, toggleComplete, handleRemove}) =>{
    return(
        <li>
            {/* en label pongo un style tipo style={task.complete ? "completed" : incomplete}*/}
         <label> 
             <input type="checkbox"
             checked={task.complete}
             onChange={()=>toggleComplete(task)}/>
            {task.text}
         </label>
         <button onClick={()=> handleRemove(task.text)}>
             Remove
         </button>
        </li>
    )
};

export default TodoItem;