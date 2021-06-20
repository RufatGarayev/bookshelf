import { useState } from 'react';
import BookCard from './BookCard';
import Pagination from '../Other/Pagination';
import { connect } from 'react-redux';

const BookCards = (props) => {
    const { books } = props.books;
    const { cart } = props.cart;

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(12);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const totalPagesNum = Math.ceil(books.length / booksPerPage);

    return (
        <section id="books-shop">
            <div className="container">
                <div className="row">
                    {
                        currentBooks.map(book => (
                            <div key={book.id} className="col-lg-3">
                                <BookCard book={book} cart={cart} />
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <Pagination
                            pages={totalPagesNum}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        cart: state.cart
    }
};

export default connect(mapStateToProps)(BookCards);