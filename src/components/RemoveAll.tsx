import React from "react";

type RemoveAllProps = {
    tasks: Array<Task>,
    handleRemoveAll:HandleRemoveAll,
};
const RemoveAll : React.FC<RemoveAllProps> = ({tasks, handleRemoveAll})=>{
 return(
     <button onClick={()=>handleRemoveAll(tasks)}>
         Delete all
     </button>
 )
};

export default RemoveAll