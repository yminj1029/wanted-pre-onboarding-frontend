import React from 'react';
import styled from 'styled-components';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const ToDoTemplateDiv = styled.div`
    display: flex;
    flex-direction:column;
    width: 400px;
`;
function ToDoPage(props) {
    return (
        <ToDoTemplateDiv>
            <TodoInsert/>
            <TodoList/>
        </ToDoTemplateDiv>
    );
}

export default ToDoPage;