import React from 'react';
import styled from 'styled-components';


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
    >button{
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

function TodoItem(props) {
    return (
        <TodoItemLiTag>
            <label>
                <input type="checkbox" />
                <span>TODO 1</span>
                {/* <input className="modifyInput" data-testid="modify-input" /> */}
            </label>
            <button className="modifyBtn" data-testid="modify-button">수정</button>
            <button className="deleteBtn" data-testid="delete-button">삭제</button>
            {/* <button className="modifyBtn" data-testid="submit-button">제출</button>
            <button className="deleteBtn" data-testid="cancel-button">취소</button> */}
        </TodoItemLiTag>
    );
}

export default TodoItem;