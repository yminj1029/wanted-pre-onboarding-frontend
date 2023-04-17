import React, { startTransition, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    const navigate = useNavigate();
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
        const url = 'https://www.pre-onboarding-selection-task.shop/auth/signup';
        const params = {
            "email" : emailAddress,
            "password":password
        }
        axios.post(url,params)
        .then((res)=>{
            alert("회원가입을 성공했습니다.")
            return navigate('/signin')
        }).catch((err)=>{
            const {statusCode, message} = err.response.data;
            if(statusCode === 400){
                alert(message)
            }   
        });
    }
    

    return (
        <SignUpDiv>
            <span>회원가입</span>
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
                Sign Up
            </ButtonElement>
            <NavBarLink to="/signin">로그인</NavBarLink>
        </SignUpDiv>
    );
}

export default SignUpPage;