import {useState} from 'react'

export default function Books({selected, onChangeBooks}) {
    const [checkoutBooks, setCheckoutBooks] = useState(0)
    const [returnBooks, setReturnBooks] = useState(0)

    function handleSubmit(e) {
        // prevent page from reloading
        e.preventDefault()

        // calculate books change
        const booksChange = checkoutBooks - returnBooks

        // call handleChangeBooks function
        onChangeBooks(booksChange)

        // reset book values
        setCheckoutBooks(0)
        setReturnBooks(0)
    }

    return (
        <form className="books">
            <div className="books-title">{selected ? `${selected.name}'s ` : ''}Books</div>

            {selected ? <>
                <div className="books-input">
                <label>Check out books: </label>
                <select value={checkoutBooks} onChange={(e) => setCheckoutBooks(e.target.value)}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div className="books-input">
                <label>Return books: </label>
                <select value={returnBooks} onChange={(e) => setReturnBooks(e.target.value)}>
                    <option value={0}>0</option>
                    {Array.from({length: selected?.books}, (_, i) => i + 1).map((num) =>
                        <option value={num} key={num}>{num}</option>
                    )}
                </select>
            </div>

            <div className="books-submit">
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
            </>
            :
            <div></div>
            }
        </form>
    )
}