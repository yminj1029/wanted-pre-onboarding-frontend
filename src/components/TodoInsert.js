import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import restApiUtil from '../api/restApiUtil';

const TodoInsertDiv = styled.div`
    display: flex;
    height: 35px;
    margin: 10px;
`;
const InputElement = styled.input`
    width : 85%;    
`;
const ButtonElement = styled.button`
    width: 15%;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
    font-weight:bold;
    border: none;        
    background-color: #61dafb;
    color: white;
    :disabled{
        background-color: gray;
        pointer-events:none;
    }
    :hover{
        background-color: white;
        color: #61dafb;
    }
`;

function TodoInsert(props) {

    const [todoData, setTodoData] = useState('');

    const handleTodoInput = useCallback((e)=>{
        setTodoData(e.target.value)
    },[]);
    
    const handleAddTodo= useCallback((e)=>{
        e.preventDefault();
    
        const params = {
            todo:todoData
        }
        restApiUtil.post('/todos', params).then((res)=>{
            console.log("todo 입력 성공");
        }).catch((err)=>{
            console.log(err);
        })
        setTodoData('')
    },[todoData])
    return (
        <TodoInsertDiv>
            <InputElement 
            value={todoData}
            onChange={handleTodoInput}
            data-testid="new-todo-input" />
            <ButtonElement 
            onClick={handleAddTodo}
            data-testid="new-todo-add-button">추가</ButtonElement>
        </TodoInsertDiv>
    );
}

export default TodoInsert;