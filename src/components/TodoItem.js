import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteTodo, updateTodo } from '../commons/actions';


const TodoItemLiTag = styled.li`
    list-style:none;
    display: flex;
    align-items:center;
    border: 0.5px solid white;
    height: 35px;
    color: #282c34;
    font-size:18px;

    >label{
        display: flex;
        width: 300px;
        text-align:start;
        >input{
            width: 30px;
            height: 20px;
        }
        .modifyInput{
            width: 200px;
        }
    }
    >div>button{
        border:none;
        background: none;
        font-size:15px;
        font-weight:bold;
    }
    .modifyBtn{
        color: #039dff;
    }
    .deleteBtn{
        color: #ff033e;
    }
`;

function TodoItem({id, isCompleted, todo, userId}) {
    const dispatch = useDispatch();

    const [todoData, setTodoData] = useState(todo)
    const [updateFlag, setUpdateFlag] = useState(false)

    const handleCompleted = (e)=>{
        submitUpdateData(e);
    }
    const handleDeleteBtn = ()=>{
        dispatch(deleteTodo(id))
    }
    
    const handleUpdateBtn = ()=>{
        setUpdateFlag(true)
    }
    const cancelUpdateBtn = () =>{
        setUpdateFlag(false)
    }
    const handleTodoInput = (e)=>{
        setTodoData(e.target.value)
    };

    const handleSubmitBtn = ()=>{
        submitUpdateData(isCompleted);
        setUpdateFlag(false);
    }

    const submitUpdateData = (checked)=>{
        const params ={
            todo : todoData,
            isCompleted : checked 
        }
        dispatch(updateTodo(id, params))
    }
    return (
        <TodoItemLiTag>
            <label>
                <input 
                type="checkbox" 
                checked={isCompleted}
                onChange={({ target: { checked } }) => handleCompleted(checked)}
                />
                {!updateFlag? (<span>{todo}</span>)
                :(
                    <input 
                    value={todoData}
                    onChange={handleTodoInput} 
                    className="modifyInput" 
                    data-testid="modify-input" />
                )    
                }
            </label>
            {!updateFlag? (
                <div>
                    <button 
                    onClick={handleUpdateBtn} 
                    className="modifyBtn" 
                    data-testid="modify-button">수정</button>
                    <button
                     onClick={handleDeleteBtn}
                    className="deleteBtn" 
                    data-testid="delete-button">삭제</button>
                </div>
                )
                :(
                    <div>
                        <button 
                        onClick={handleSubmitBtn}
                        className="modifyBtn" 
                        data-testid="submit-button">제출</button>
                        <button
                        onClick={cancelUpdateBtn} 
                        className="deleteBtn" 
                        data-testid="cancel-button">취소</button>
                    </div>
                )    
                }
        </TodoItemLiTag>
    );
}

export default TodoItem;