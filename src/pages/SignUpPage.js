import React, { useState } from 'react';
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
        margin-bottom:20px;
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
    :disabled{
        background-color: gray;
        pointer-events:none;
    }
    :hover{
        background-color: white;
        color: #61dafb;
    }
`;

const NavBarLink = styled(Link)`
  color: white;
`;

function SignUpPage(props) {
    //email input check
    const [emailAddress, setEmailAddress] = useState('');
    const handleEmailInput = (e)=>{
        setEmailAddress(e.target.value);
    }
    //email @포함
    const isValidEmail = emailAddress.includes('@');

    //pw input check
    const [password, setPassword] = useState('');
    const handlePassWord = (e)=>{
        setPassword(e.target.value);
    }
    //비밀번호조건 8자 이상
    const isValidPassword = password.length >= 8;

    //회원가입 성공 후 sigin 페이지로 이동
    const handleSignUp = ()=>{
        console.log("email", emailAddress,"password", password)
    }
    

    return (
        <SignUpDiv>
            <span>Sign Up</span>
            <InputElement 
                onChange={handleEmailInput}
                value={emailAddress}
                placeholder='이메일 입력시 @를 포함해야 합니다.'
                data-testid="email-input" />
            <InputElement 
                type='password'
                onChange={handlePassWord}
                value={password}
                placeholder='비밀번호는 8자 이상이어야 합니다.'
                data-testid="password-input" />
            <ButtonElement
                onClick={handleSignUp}
                disabled={!isValidEmail||!isValidPassword} 
                data-testid="signup-button">
                회원가입
            </ButtonElement>
            <NavBarLink to="/signin">로그인</NavBarLink>
        </SignUpDiv>
    );
}

export default SignUpPage;