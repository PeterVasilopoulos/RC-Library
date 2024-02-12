export default function Books() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form className="books">
            <div className="books-title">X's Books</div>

            <div className="books-input">
                <label>Check out books: </label>
                <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>

            <div className="books-input">
                <label>Return books: </label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>

            <div className="books-submit">
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
        </form>
    )
}