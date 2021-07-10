import Breadcrumb from '../components/Other/Breadcrumb';
import WishListBooks from '../components/Wishlist/WishListBooks';

const Wishlist = () => {
    return (
        <div className="wishlist-content">
            <div className="main">
                <Breadcrumb currentPage={"Wishlist"} />
                <WishListBooks />
            </div>
        </div>
    )
}

export default Wishlist;