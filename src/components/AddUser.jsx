import {useState} from 'react'

export default function AddUser({onAddUser}) {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        // prevent page from reloading
        e.preventDefault()

        // early return if no name is provided
        if(!name) {
            return
        }

        // create id variable
        const id = crypto.randomUUID()

        // create object to pass into user list
        const newUser = {
            id,
            name,
            books: 0
        }

        // pass newUser into add user function
        onAddUser(newUser)

        // reset name field back to empty
        setName('')
    }

    return (
        <div className='user-list'>
            <div className='user-list-title'>Add User</div>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="books-input">
                    <label>Name: </label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className="books-submit">
                    <button>Add User</button>
                </div>
            </form>
        </div>
    )
}