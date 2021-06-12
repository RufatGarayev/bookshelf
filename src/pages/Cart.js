import Breadcrumb from '../components/Other/Breadcrumb';
import ShoppingCart from '../components/Account/ShoppingCart/ShoppingCart';

const Cart = () => {
    return (
        <div className="cart-content">
            <div className="main">
                <Breadcrumb currentPage={"Cart"} />
                <ShoppingCart />
            </div>
        </div>
    )
}

export default Cart;