import React from "react";
import TodoItem from "../components/TodoItem";
import RemoveAll from "../components/RemoveAll";

interface TodoContainerProps {
    tasks: Array<Task>,
    toggleComplete: ToggleComplete,
    handleRemove: HandleRemove,
    handleRemoveAll: HandleRemoveAll,

};

const TodoContainer: React.FC<TodoContainerProps> = ({tasks, toggleComplete, handleRemove, handleRemoveAll}) =>{
 return(
     <>
        <ul>
            {
                tasks.map(task => (
                    <TodoItem key={task.text} task={task} toggleComplete={toggleComplete} handleRemove={handleRemove}/>
                ))
            }
        </ul>
        <RemoveAll handleRemoveAll={handleRemoveAll} tasks={tasks}/>
    </>
    )
};

export default TodoContainer