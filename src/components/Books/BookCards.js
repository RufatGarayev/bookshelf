import { BooksData } from './BooksData';
import BookCard from './BookCard';
import Pagination from '../Other/Pagination';

const BookCards = () => {
    return (
        <section id="books-shop">
            <div className="container">
                <div className="row">
                    {
                        BooksData.map(book => (
                            <div key={book.id} className="col-lg-3">
                                <BookCard book={book} />
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookCards;