import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import BookContent from '../components/BookDetails/BookContent';
import RelatedBooks from '../components/BookDetails/RelatedBooks';
import Spinner from '../components/Other/Spinner';
import { connect } from 'react-redux';

const BookDetails = (props) => {
    const propsId = props.match.params.id;
    const { books } = props.books;
    const theBook = books.find(book => book.id === parseInt(propsId));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div id="book-details">
            <div className="main">
                <Breadcrumb currentPage={"Book Details"} />
                {
                    loading ? (<Spinner />) : (
                        <>
                            <BookContent book={theBook} />
                            <RelatedBooks books={books} book={theBook} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    books: state.books
});

export default connect(mapStateToProps)(BookDetails);