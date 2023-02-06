"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import UserInformation from "./user-information";

export default function LoginButton({ children }) {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <UserInformation data={session.user} />
                <button onClick={() => signOut()}>Sign Out</button>
                {children}
            </>
        )
    }

    return (
        <div>
            Not Signed in <br />
            <button onClick={() => signIn()}>Sign In</button>
        </div>
    )
}
