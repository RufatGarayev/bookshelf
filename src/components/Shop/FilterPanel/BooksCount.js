const BooksCount = ({books}) => {
    return (
        <div className="books-count">
            <h5>Books <span>({books.length})</span></h5>
        </div>
    )
}

export default BooksCount;