import BooksCount from './BooksCount';
import Search from './Search';
import Sorting from './Sorting';
import { connect } from 'react-redux';
import { SortBook } from '../../../redux/actions/bookActions';

const FilterPanel = (props) => {
    const { books } = props.books;

    return (
        <div className="container">
            <div className="books-count-wrapper">
                <BooksCount books={books} />
            </div>
            <div id="filter-panel">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="search-box-wrapper">
                            <Search />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sorting-wrapper">
                            <Sorting Sorting={props.SortBook} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

export default connect(mapStateToProps, { SortBook })(FilterPanel);