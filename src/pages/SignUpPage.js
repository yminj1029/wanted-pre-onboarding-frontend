import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >span{
        color: white;
        font-size: 25px;
        font-weight: bold;
    }
`;

const InputElement = styled.input`
    width : 250px;
    height: 30px;
    margin: 10px;
`;

const ButtonElement = styled.button`
    width: 150px;
    height: 45px;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom:20px;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
    border: none;        
    background-color: #61dafb;
    color: white;
    :hover{
        background-color: white;
        color: #61dafb;
    }
`;

const NavBarLink = styled(Link)`
  color: white;
`;

function SignUpPage(props) {
    return (
        <SignUpDiv>
            <span>Sign Up</span>
            <InputElement data-testid="email-input" />
            <InputElement data-testid="password-input" />
            <ButtonElement data-testid="signup-button">회원가입</ButtonElement>
            <NavBarLink to="/signin">로그인</NavBarLink>
        </SignUpDiv>
    );
}

export default SignUpPage;