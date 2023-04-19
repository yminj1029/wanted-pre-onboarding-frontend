import * as ACTION from './actions';
import { handleActions } from 'redux-actions';

const initialState ={
    loading : {
        GET_TODO_LIST:false
    },
    todoList : []
}

export const todoReducer = handleActions(
    {
        [ACTION.GET_TODO_LIST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_TODO_LIST: true //요청 시작 
            }
        }),
        [ACTION.GET_TODO_LIST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_TODO_LIST: false // 요청 완료
            },
            todoList: action.payload
        }),
        [ACTION.GET_TODO_LIST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_TODO_LIST: false // 요청 완료 
            }
        }),
        [ACTION.INSERT_TODO]: state => ({
            ...state,
            loading: {
                ...state.loading,
                INSERT_TODO: true //요청 시작 
            }
        }),
        [ACTION.INSERT_TODO_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                INSERT_TODO: false // 요청 완료
            },
            todoList: state.todoList.concat(action.payload)
        }),
        [ACTION.INSERT_TODO_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                INSERT_TODO: false // 요청 완료 
            }
        }),
        [ACTION.DELETE_TODO]: state => ({
            ...state,
            loading: {
                ...state.loading,
                DELETE_TODO: true //요청 시작 
            }
        }),
        [ACTION.DELETE_TODO_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                DELETE_TODO: false // 요청 완료
            },
            todoList: state.todoList.filter((todo)=> todo.id !== action.payload)
        }),
        [ACTION.DELETE_TODO_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                DELETE_TODO: false // 요청 완료 
            }
        }),
        [ACTION.UPDATE_TODO]: state => ({
            ...state,
            loading: {
                ...state.loading,
                UPDATE_TODO: true //요청 시작 
            }
        }),
        [ACTION.UPDATE_TODO_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                UPDATE_TODO: false // 요청 완료
            },
            todoList: state.todoList.map((todo)=> todo.id === action.payload.id ? {...action.payload} :todo )
        }),
        [ACTION.UPDATE_TODO_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                UPDATE_TODO: false // 요청 완료 
            }
        })
    },
    initialState
);