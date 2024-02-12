import {useState} from 'react'
import AddUser from './AddUser'
import User from './User'

export default function UserList({users, selected, onSelect, onAddUser}) {
    return (
        <div className="user-list">
            <div className='user-list-title'>User List</div>



            {users.map((user, i) => 
                <User 
                    user={user}
                    key={i}
                    selected={selected}
                    onSelect={onSelect}
                >
                    {i + 1}
                </User>
            )}

            <AddUser onAddUser={onAddUser} />

        </div>
    )
}