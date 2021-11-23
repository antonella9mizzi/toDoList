import React from "react";
import TodoItem from "../components/TodoItem";

interface TodoContainerProps {
    tasks: Array<Task>,
    toggleComplete: ToggleComplete,
    handleRemove: HandleRemove,
};

const TodoContainer: React.FC<TodoContainerProps> = ({tasks, toggleComplete, handleRemove}) =>{
 return(
        <ul>
            {
                tasks.map(task => (
                    <TodoItem key={task.text} task={task} toggleComplete={toggleComplete} handleRemove={handleRemove}/>
                ))
            }
        </ul>
    )
};

export default TodoContainer