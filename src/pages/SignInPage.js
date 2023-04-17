import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignInDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >span{
        margin-bottom:20px;
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

function SignInPage(props) {
    return (
        <SignInDiv>
            <span>Sign In</span>
            <InputElement data-testid="email-input" />
            <InputElement data-testid="password-input" />
            <ButtonElement data-testid="signin-button">로그인</ButtonElement>
            <NavBarLink to="/signup">회원가입</NavBarLink>
        </SignInDiv>
    );
}

export default SignInPage;