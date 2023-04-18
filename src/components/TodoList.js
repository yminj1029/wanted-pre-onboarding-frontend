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

    .noTodo {
        color: #282c34;
        font-size:18px;
        font-weight:bold;
        height: 200px;
        margin-top: 50%;
    }
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
            {todoListData.length === 0?
            (<div className='noTodo'>할 일을 추가해주세요</div>) 
            :(todoListData.map((todo)=>{
               return <TodoItem
                    key = {todo.id}
                    id ={todo.id}
                    isCompleted={todo.isCompleted}
                    userId={todo.userId}
                    todo={todo.todo}
                />
            }))}
        </TodoListTemplateUl>
    );
}

export default TodoList;