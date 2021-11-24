type AddItem = (newItem: string) => void;

type Task = {
    text: string,
    complete: boolean,
};

type ToggleComplete = (selectedTodo:Task) => void;

type HandleRemove = (taskToDelete:string) => void ;

type HandleRemoveAll = (arrayToDelete: Array) => void;