import restApiUtil from "../util/RestApiUtil";

export const GetTodoList = "GET_TODO_LIST";
export const InsertTodo = "INSERT_TODO";
export const UpdateTodo = "UPDATE_TODO";
export const DeleteTodo = "DELETE_TODO";

export const get_todo_list = () =>{
    restApiUtil.get('/todos').then((res)=>{
        console.log(res.data);
        return {
            type : GetTodoList,
            todos : res.data
        }
    }).catch((err)=>{
        console.log(err);
        return {
            type : GetTodoList,
            // todos: []
        }
    })
} 
export const insert_todo = (todo)=>{
    restApiUtil.post('/todos', {todo}).then((res)=>{
        console.log("todo 입력 성공");
        
    }).catch((err)=>{
        console.log(err);
    });
    return {
        type:InsertTodo,
        todo
    };
}

export const update_todo = (todo)=>{
    return {
        type:UpdateTodo,
        todo
    };
}

export const delete_todo = (id)=>{
    return {
        type:DeleteTodo,
        id
    }
}