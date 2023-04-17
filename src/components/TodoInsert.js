import React from 'react';
import styled from 'styled-components';

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
    return (
        <TodoInsertDiv>
            <InputElement data-testid="new-todo-input" />
            <ButtonElement data-testid="new-todo-add-button">추가</ButtonElement>
        </TodoInsertDiv>
    );
}

export default TodoInsert;