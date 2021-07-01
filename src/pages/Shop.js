import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import FilterPanel from '../components/Shop/FilterPanel/FilterPanel';
import BookCards from '../components/BookCard/BookCards';
import Spinner from '../components/Other/Spinner';
import { connect } from 'react-redux';
import NoBooks from '../components/Shop/NoBooks';
import '../scss/_shop.scss';

const Shop = (props) => {
    const { books } = props.books;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="shop-content">
            <div className="main">
                <Breadcrumb currentPage={"Shop"} />
                <FilterPanel />
                {
                    loading ? (<Spinner />) : (books.length === 0 ? <NoBooks /> : <BookCards />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

export default connect(mapStateToProps)(Shop);