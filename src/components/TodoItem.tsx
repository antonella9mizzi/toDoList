import React from "react";
import { Grid } from "@mui/material";

interface TodoItemProps {
    task: Task,
    toggleComplete: ToggleComplete,
    handleRemove(taskToDelete:string): void,
};
const TodoItem: React.FC<TodoItemProps>= ({task, toggleComplete, handleRemove}) =>{
    return(
        <Grid>
         <label> 
             <input type="checkbox"
             checked={task.complete}
             onChange={()=>toggleComplete(task)}/>
            {task.text}
         </label>
         <button onClick={()=> handleRemove(task.text)}>x</button>
        </Grid>
    )
};

export default TodoItem;