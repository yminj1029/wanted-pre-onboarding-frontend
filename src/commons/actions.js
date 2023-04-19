import restApiUtil from "../util/RestApiUtil";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const GET_TODO_LIST_SUCCESS = "GET_TODO_LIST_SUCCESS";
export const GET_TODO_LIST_FAILURE = "GET_TODO_LIST_FAILURE";

export const INSERT_TODO = "INSERT_TODO";
export const INSERT_TODO_SUCCESS = "INSERT_TODO_SUCCESS";
export const INSERT_TODO_FAILURE = "INSERT_TODO_FAILURE";
//thunk 함수 생성
export const getTodoList = () => async dispatch => {
    dispatch({ type: GET_TODO_LIST }); // 요청 시작 
    try {
        const response = await restApiUtil.get('/todos');
        dispatch({
            type: GET_TODO_LIST_SUCCESS,
            payload: response.data 
            //payload -> 액션에 필요한 추가 데이터를 담음 
        }); //요청 성공 
    } catch (e) {
        dispatch({
            type: GET_TODO_LIST_FAILURE,
            payload: e,
            error: true
        }) // 에러 발생 
        throw e; //나중에 컴포넌트에서 에러 조회 가능 
    }
};

export const insertTodo = (todo) => async dispatch => {
    dispatch({ type: INSERT_TODO }); // 요청 시작 
    try {
        const response = await restApiUtil.post('/todos', {todo});
        console.log('insert?',response);
        dispatch({
            type: INSERT_TODO_SUCCESS,
            payload: response.data 
            //payload -> 액션에 필요한 추가 데이터를 담음 
        }); //요청 성공 
    } catch (e) {
        dispatch({
            type: INSERT_TODO_FAILURE,
            payload: e,
            error: true
        }) // 에러 발생 
        throw e; //나중에 컴포넌트에서 에러 조회 가능 
    }
};


// export const UpdateTodo = "UPDATE_TODO";
// export const DeleteTodo = "DELETE_TODO";
// export const insert_todo = (todo)=>{
//     restApiUtil.post('/todos', {todo}).then((res)=>{
//         console.log("todo 입력 성공");
        
//     }).catch((err)=>{
//         console.log(err);
//     });
//     return {
//         type:InsertTodo,
//         todo
//     };
// }

// export const update_todo = (todo)=>{
//     return {
//         type:UpdateTodo,
//         todo
//     };
// }

// export const delete_todo = (id)=>{
//     return {
//         type:DeleteTodo,
//         id
//     }
// }