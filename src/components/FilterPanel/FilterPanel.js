import BooksCount from './BooksCount';
import Search from './Search';
import Sorting from './Sorting';

const FilterPanel = () => {
    return (
        <div className="container">
            <div className="books-count-wrapper">
                <BooksCount />
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
                            <Sorting />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel;