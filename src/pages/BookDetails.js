import Breadcrumb from '../components/Other/Breadcrumb';
import BookContent from '../components/BookDetails/BookContent';
import RelatedBooks from '../components/BookDetails/RelatedBooks';
import { connect } from 'react-redux';
import '../sass/_book-details.scss';

const BookDetails = (props) => {
    const propsId = props.match.params.id;
    const {books} = props.books;
    const theBook = books.find(book => book.id === parseInt(propsId));

    return (
        <div id="book-details">
            <div className="main">
                <Breadcrumb currentPage={"Book Details"} />
                <BookContent book={theBook} />
                <RelatedBooks book={theBook} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    books: state.books
})

export default connect(mapStateToProps)(BookDetails);