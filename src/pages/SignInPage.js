import React from 'react';

function SignInPage(props) {
    return (
        <div>
            Hello, sign in please
            <input data-testid="email-input" />
            <input data-testid="password-input" />
            <button data-testid="signin-button">로그인</button>
        </div>
    );
}

export default SignInPage;