import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import FilterPanel from '../components/Shop/FilterPanel/FilterPanel';
import BookCards from '../components/BookCard/BookCards';
import Spinner from '../components/Other/Spinner';
import '../sass/_shop.scss';

const Shop = () => {
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
                    loading ? (<Spinner />) : (<BookCards />)
                }
            </div>
        </div>
    )
}

export default Shop;