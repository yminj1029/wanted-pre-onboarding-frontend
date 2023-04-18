import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import restApiUtil from '../util/RestApiUtil';

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

function SignInPage({authenticated}) {
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    
    if(authenticated){
        return <Navigate to='/todo' authenticated={authenticated}/>
    }
    //email input check
    const handleEmailInput = (e)=>{
        setEmailAddress(e.target.value);
    }
    //email @포함
    const isValidEmail = emailAddress.includes('@');

    //pw input check
    const handlePassWord = (e)=>{
        setPassword(e.target.value);
    }
    //비밀번호조건 8자 이상
    const isValidPassword = password.length >= 8;

    const handleSignIn = () =>{
        const params = {
            "email" : emailAddress,
            "password":password
        }
        restApiUtil.post('/auth/signin', params).then((res)=>{
            // token 저장
            const tokenData = res.data.access_token;
            localStorage.setItem("token", tokenData);
            return navigate('/todo')
        }).catch((err)=>{
            const {statusCode, message} = err.response.data;
            if(statusCode === 404){
                alert(message)
                return navigate('/signin')
            }
            if(statusCode === 401){
                alert("비밀번호를 다시 한번 확인해 주세요")
                return navigate('/signin')
            }   
        });
    }
    return (
        <SignInDiv>
            <span>로그인</span>
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
                onClick={handleSignIn}
                disabled={!isValidEmail||!isValidPassword} 
                data-testid="signin-button">
                Sign In
            </ButtonElement>
            <NavBarLink to="/signup">회원가입</NavBarLink>
        </SignInDiv>
    );
}

export default SignInPage;