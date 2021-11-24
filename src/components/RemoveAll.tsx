import React from "react";

interface RemoveAllProps {
    tasks: Array<Task>,
    handleRemoveAll(arrayToDelete:Array<Task>): void,
};
const RemoveAll : React.FC<RemoveAllProps> = (tasks, handleRemoveAll)=>{
 return(
     <button onClick={()=>handleRemoveAll(tasks)}>
         Delete all
     </button>
 )
};

export default RemoveAll