export default function User({user, children, onSelect, selected}) {
    function handleClick() {
        onSelect(user)
    }

    return (
        <div 
            className={selected?.id === user.id ? 'user selected' : 'user'}
            onClick={() => handleClick(user)}
        >
            <div className="user-name">
                {/* <input type="checkbox" onChange={selected === user.id} /> */}
                {children}. {user.name}
            </div>
            <p className={user.books > 0 ? 'overdue' : ''}>
                {user.books ? `${user.books} books checked out` : 'no books checked out'}
            </p>
        </div>
    )
}