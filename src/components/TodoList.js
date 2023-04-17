import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoListTemplateUl = styled.ul`
    display: flex;
    flex-direction : column;
    background-color: #e5e7eb;
    margin: 10px;
    width: auto;
    padding: 0;
`;

function TodoList(props) {
    return (
        <TodoListTemplateUl>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </TodoListTemplateUl>
    );
}

export default TodoList;