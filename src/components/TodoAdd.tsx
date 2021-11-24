import React, {ChangeEvent, FormEvent, useState, } from "react";
import { Grid } from "@mui/material";

type TodoAddProps = {
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
        <Grid 
        container
        direction="row"
        rowSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        justifyContent="center"
        alignItems="center"
        >
            <Grid item xs={11}>
                <input type="text" value={newItem} placeholder="Add a new task" onChange={handleChange}/> 
            </Grid>
            <Grid item xs={1}>
                <button type="submit" onClick={handleSubmit}> + </button>  
            </Grid>
        </Grid>
    </form>
    )
};

export default TodoAdd;