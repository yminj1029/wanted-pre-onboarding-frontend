import React from 'react';
import styled from 'styled-components';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { Navigate } from 'react-router-dom';

const ToDoTemplateDiv = styled.div`
    display: flex;
    flex-direction:column;
    width: 400px;
`;
function ToDoPage({authenticated}) {
    const accessToken = localStorage.getItem('token')
    if(!authenticated&&!accessToken){
        return <Navigate to='/signin'/>
    }
    return (
        <ToDoTemplateDiv>
            <TodoInsert/>
            <TodoList/>
        </ToDoTemplateDiv>
    );
}

export default ToDoPage;