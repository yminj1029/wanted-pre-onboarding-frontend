import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import restApiUtil from '../api/restApiUtil';

const TodoListTemplateUl = styled.ul`
    display: flex;
    flex-direction : column;
    background-color: #e5e7eb;
    margin: 10px;
    width: auto;
    padding: 0;
`;

function TodoList(props) {
    const [todoListData, setTodoListData] = useState([]);
    
    useEffect(()=>{
        restApiUtil.get('/todos').then((res)=>{
            setTodoListData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <TodoListTemplateUl>
            <TodoItem/>
        </TodoListTemplateUl>
    );
}

export default TodoList;