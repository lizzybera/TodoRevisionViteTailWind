import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { viewOneAuth } from '../../api/authApi'


interface iUser{
    myID : string
}

const UserName: React.FC<iUser> = ({ myID }) => {

    const { data: user } = useQuery({
        queryKey: ["authUser", { id: myID }],
        queryFn: () => viewOneAuth(myID),

        refetchInterval: 1000
    })

    return (
        <div>
            <div
                className="uppercase text-[12px]"
            >{user?.name}</div>
            <div
                className="capitalize text-[7px]"
            >{user?.email}</div>
        </div>
    )
}

export default UserName