import {useState} from 'react';
import UserList from './UserList'
import Books from './Books'
import Navbar from './Navbar'

const testUsers = [
    {
        name: 'Henry',
        books: 0,
        id: 0
    },
    {
        name: 'Jerry',
        books: 2,
        id: 1
    },
    {
        name: 'Dolan',
        books: 0,
        id: 2
    }
]

const navs = [
    {
        name: 'Books',
        classes: '',
        id: crypto.randomUUID()
    },
    {
        name: 'Q&A',
        classes: '',
        id: crypto.randomUUID()
    },
    {
        name: 'Notes',
        classes: '',
        id: crypto.randomUUID()
    },
    {
        name: 'Announcements',
        classes: '',
        id: crypto.randomUUID()
    }
]

export default function App() {
    // users state
    const [users, setUsers] = useState(testUsers)
    // selected user state
    const [selected, setSelected] = useState(null)

    // navbar selected state
    const [selectedNav, setSelectedNav] = useState(navs[0].id)


    // handle select user function
    function handleSelect(user) {
        // if selected user is clicked again then unselect, otherwise select clicked user
        setSelected((current) => current?.id === user.id ? null : user)
    }

    // handle add user function
    function handleAddUser(newUser) {
        setUsers((users) => [...users, newUser])
    }

    // handle change books function 
    function handleChangeBooks(booksChange) {
        // update books for selected user
        setUsers((users) => users.map((user) => 
            user.id === selected.id ? {...user, books: user.books + booksChange} : user
        ))

        // unselect user
        setSelected(null)
    }

    return (
        <>
            <Navbar navs={navs} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

            {/* Books */}
            {selectedNav === navs[0].id ?
                <div className='container'>
                    <UserList 
                        users={users}
                        selected={selected} 
                        onSelect={handleSelect} 
                        onAddUser={handleAddUser} 
                    />

                    <Books 
                        onChangeBooks={handleChangeBooks}
                        selected={selected} 
                    />
                </div>
            : 
                <div></div>
            }
        </>
    )
}