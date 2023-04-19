import { GetTodoList, InsertTodo, UpdateTodo, DeleteTodo } from "./actions";

const initialState ={
    todos:[]
}

export const todoReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GetTodoList:
            return {
                todos:[...action.todos]
            };
        case InsertTodo:
            return {
                
            };
        case UpdateTodo:
            return {

            };
        case DeleteTodo:
            return{

            };
        default:
            return state;
    }
}

