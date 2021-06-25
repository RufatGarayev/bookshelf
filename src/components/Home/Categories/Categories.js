import BestSeller from './BestSeller';
import NewReleases from './NewReleases';
import { connect } from 'react-redux';

const Categories = (props) => {
    const {books} = props.books;

    return (
        <section id="categories">
            <div className="container">
                <BestSeller books={books} />
                <NewReleases books={books} />
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

export default connect(mapStateToProps)(Categories);