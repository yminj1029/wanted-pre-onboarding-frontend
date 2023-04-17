import React from 'react';

function SignUpPage(props) {
    return (
        <div>
            hello, sign up page
            <input data-testid="email-input" />
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button>
        </div>
    );
}

export default SignUpPage;