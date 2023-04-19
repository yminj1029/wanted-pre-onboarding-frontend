import { GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS, 
    GET_TODO_LIST_FAILURE,
    INSERT_TODO,
    INSERT_TODO_SUCCESS,
    INSERT_TODO_FAILURE
    } from "./actions";
import { handleActions } from 'redux-actions';

const initialState ={
    loading : {
        GET_TODO_LIST:false
    },
    todoList : []
}

export const todoReducer = handleActions(
    {
        [GET_TODO_LIST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_TODO_LIST: true //요청 시작 
            }
        }),
        [GET_TODO_LIST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_TODO_LIST: false // 요청 완료
            },
            todoList: action.payload
        }),
        [GET_TODO_LIST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_TODO_LIST: false // 요청 완료 
            }
        }),
        [INSERT_TODO]: state => ({
            ...state,
            loading: {
                ...state.loading,
                INSERT_TODO: true //요청 시작 
            }
        }),
        [INSERT_TODO_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                INSERT_TODO: false // 요청 완료
            },
            todoList: state.todoList.concat(action.payload)
        }),
        [INSERT_TODO_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                INSERT_TODO: false // 요청 완료 
            }
        })
    },
    initialState
);

// export default todoReducer;
// //최초 state를 빈 배열로 지정
// export const todoReducer = (state=[], action) =>{
//     switch (action.type) {
//         case GET_TODO_LIST:
//             return action.payload;
//         case InsertTodo:
//             return {
                
//             };
//         case UpdateTodo:
//             return {

//             };
//         case DeleteTodo:
//             return{

//             };
//         default:
//             return state;
//     }
// }

// //createStore를 위한 reducer로 넘어감
// export default combineReducers({
//     todos : todoReducer
// })