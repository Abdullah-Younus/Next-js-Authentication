import React from 'react'
import { getServerSession } from 'next-auth/next';
import UserInfomation from './user-information';

export default async function AppDescription() {
    const session = await getServerSession();
    return (
        <div>
            <div>
                This is application
            </div>
            <UserInfomation data={session.user} />
        </div>
    )
}
