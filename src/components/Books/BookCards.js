import { BooksData } from './BooksData';
import BookCard from './BookCard';

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
            </div>
        </section>
    )
}

export default BookCards;