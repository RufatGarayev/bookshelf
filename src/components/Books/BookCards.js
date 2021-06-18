import BookCard from './BookCard';
import Pagination from '../Other/Pagination';
import { connect } from 'react-redux';

const BookCards = (props) => {
    const { books } = props.books;
    const { cart } = props.cart;

    return (
        <section id="books-shop">
            <div className="container">
                <div className="row">
                    {
                        books.map(book => (
                            <div key={book.id} className="col-lg-3">
                                <BookCard book={book} cart={cart} />
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

const mapStateToProps = (state) => {
    return {
        books: state.books,
        cart: state.cart
    }
};

export default connect(mapStateToProps)(BookCards);