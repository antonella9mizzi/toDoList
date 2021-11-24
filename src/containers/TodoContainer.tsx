import React from "react";
import { Grid } from "@mui/material";
import TodoItem from "../components/TodoItem";
import TodoAdd from "../components/TodoAdd";
import RemoveAll from "../components/RemoveAll";


interface TodoContainerProps {
    tasks: Array<Task>,
    toggleComplete: ToggleComplete,
    handleRemove: HandleRemove,
    handleRemoveAll: HandleRemoveAll,
    addItem: AddItem,
};

const TodoContainer: React.FC<TodoContainerProps> = ({tasks, toggleComplete, handleRemove, handleRemoveAll, addItem}) =>{
 return(
     <Grid container 
     columnSpacing={{ xs: 1, sm: 2, md: 3 }}
     direction="column"
     justifyContent="center"
     alignItems="stretch">
         <Grid item xs={12}>
             <h1>To do list</h1>
         </Grid>
         <Grid item xs={12}>
            <TodoAdd addItem={addItem}/>
         </Grid>
         <Grid item xs={12}>
                {
                    tasks.map(task => (
                        <TodoItem key={task.text} task={task} toggleComplete={toggleComplete} handleRemove={handleRemove}/>
                    ))
                }
         </Grid>
        <Grid item xs={4}>
            <RemoveAll handleRemoveAll={handleRemoveAll} tasks={tasks}/>
        </Grid>
        
    </Grid>
    )
};

export default TodoContainer