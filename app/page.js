import React from 'react'
import LoginButton from './loginBtn';
import AppDescription from './app-description';

export default function Page() {
    return (
        <div>
            <h1>Auth Testing</h1>
            <div>
                <LoginButton>
                    <AppDescription />
                </LoginButton>
            </div>
        </div>
    )
}
