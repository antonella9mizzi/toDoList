import React, {ChangeEvent, FormEvent, useState, } from "react";

interface TodoAddProps {
    addItem: AddItem;
}

const  TodoAdd: React.FC<TodoAddProps> = ({addItem}) =>{
    const [newItem, setNewItem]= useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNewItem(e.target.value)
    };
   
    

    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(newItem);
        setNewItem("");
    }
    return(
        <form>
            <input type="text" value={newItem} placeholder="Add a new task" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>
                Add new task
            </button>
        </form>
    )
};

export default TodoAdd;