const Quantity = (props) => {
    const { book, increaseBook, decreaseBook } = props;

    return (
        <div className="quantity-area d-flex align-items-center">
            <button
                className="minus-btn"
                disabled={book.count === 1 ? "disabled" : null}
                onClick={() => decreaseBook(book.id)}
            >
                −
            </button>
            <input type="text" size="2" readOnly value={book.count} />
            <button
                className="plus-btn"
                disabled={book.count === 10 ? "disabled" : null}
                onClick={() => increaseBook(book.id)}
            >
                +
            </button>
        </div>
    )
}

export default Quantity;