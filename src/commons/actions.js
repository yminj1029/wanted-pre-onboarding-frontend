import restApiUtil from "../util/RestApiUtil";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const GET_TODO_LIST_SUCCESS = "GET_TODO_LIST_SUCCESS";
export const GET_TODO_LIST_FAILURE = "GET_TODO_LIST_FAILURE";

export const INSERT_TODO = "INSERT_TODO";
export const INSERT_TODO_SUCCESS = "INSERT_TODO_SUCCESS";
export const INSERT_TODO_FAILURE = "INSERT_TODO_FAILURE";

export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";
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
        dispatch({
            type: INSERT_TODO_SUCCESS,
            payload: response.data 
        }); 
    } catch (e) {
        dispatch({
            type: INSERT_TODO_FAILURE,
            payload: e,
            error: true
        }) 
        throw e; 
    }
};

export const deleteTodo = (id) => async dispatch => {
    dispatch({ type: DELETE_TODO }); // 요청 시작 
    try {
        await restApiUtil.delete(`/todos/${id}`);
        dispatch({
            type: DELETE_TODO_SUCCESS,
            payload: id
        }); 
    } catch (e) {
        dispatch({
            type: DELETE_TODO_FAILURE,
            payload: e,
            error: true
        })
        throw e; 
    }
};

export const updateTodo = (id, params) => async dispatch => {
    dispatch({ type: UPDATE_TODO }); // 요청 시작 
    try {
        const response = await restApiUtil.put(`/todos/${id}`, params);
        console.log('updateTodo?',response);
        dispatch({
            type: UPDATE_TODO_SUCCESS,
            payload: response.data
        }); 
    } catch (e) {
        dispatch({
            type: UPDATE_TODO_FAILURE,
            payload: e,
            error: true
        })
        throw e; 
    }
};
