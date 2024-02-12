import {useState} from 'react'
import AddUser from './AddUser'

export default function UserList() {
    return (
        <div className="user-list">
            <div className='user-list-title'>User List</div>

            <div className='user'>
                <div className="user-name">
                    <input type="checkbox" checked={true} />
                    1. Harry
                </div>
                <p>No books checked out</p>
            </div>

            <AddUser />

        </div>
    )
}