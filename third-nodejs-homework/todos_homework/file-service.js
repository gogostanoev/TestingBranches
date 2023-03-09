import fs from "fs";

const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};

const appendToFile = (path, data) => {
    fs.appendFileSync(path, data);
};


const readFromFile = (path) => {
    const content = fs.readFileSync(path, { encoding: "utf-8" });

    return content
};

export const readTodos = (path) => {

    const todos = readFromFile(path);

    const parsedTodos = JSON.parse(todos);

    return parsedTodos
}


let id = 3


export const addTodo = (path, todoName, isTodoDone) => {

    id++

    const todo = {
        id: id,
        name: todoName,
        done: isTodoDone
    }

    const allTodos = readTodos(path);
    allTodos.push(todo);


    writeToFile(path, JSON.stringify(allTodos, null, 2))
};





export const removeTodoId = (path, todoId) => {
    const arrayTodo = readTodos(path);

    const modifiedTodo = arrayTodo.findIndex((todo) => todo.id === todoId);
    
    if(modifiedTodo !== -1){
        arrayTodo.splice(index, 1);
        writeToFile(path, JSON.stringify(modifiedTodo, null, 2));
    }
}

export const readTodoId = (path, todoId) => {
    const readArrayTodo = readTodos(path);

    const readTodo = readArrayTodo.find((todo) => todo.id === todoId);
    return readTodo;
}

export const markedTodo = (path, todoId) => {
    const changeArrayTodo = readTodos(path);

    const changeTodo = changeArrayTodo.findIndex((todo) => todo.id === todoId);

    if(changeTodo !== -1){
        changeArrayTodo[changeTodo].done = true;
        writeToFile(path, JSON.stringify(changeArrayTodo, null, 2))
    }
}