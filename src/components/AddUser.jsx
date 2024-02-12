export default function AddUser() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className='user-list'>
            <div className='user-list-title'>Add User</div>
            
            <form>
                <div className="books-input">
                    <label>Name: </label>
                    <input type="text" />
                </div>

                <div className="books-submit">
                    <button onClick={(e) => handleSubmit(e)}>Add User</button>
                </div>
            </form>
        </div>
    )
}