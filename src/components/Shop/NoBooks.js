import { BsBook } from 'react-icons/bs';

const NoBooks = () => {
    return (
        <div className="no-books d-flex flex-column align-items-center">
            <span><BsBook /></span>
            <p>No Books</p>
        </div>
    )
}

export default NoBooks;