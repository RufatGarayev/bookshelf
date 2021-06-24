import Breadcrumb from '../components/Other/Breadcrumb';
import FilterPanel from '../components/Shop/FilterPanel/FilterPanel';
import BookCards from '../components/BookCard/BookCards';
import '../sass/_shop.scss';

const Shop = () => {
    return (
        <div className="shop-content">
            <div className="main">
                <Breadcrumb currentPage={"Shop"} />
                <FilterPanel />
                <BookCards />
            </div>
        </div>
    )
}

export default Shop;