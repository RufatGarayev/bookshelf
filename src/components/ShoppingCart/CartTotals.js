import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const CartTotals = (props) => {
    const { cart } = props.cart;
    const totalPrice = cart.reduce((total, book) => (total += book.price * book.count), 0);

    return (
        <div className="cart-totals">
            {/* ======= Title ======= */}
            <div className="cart-totals-title">
                <h3>CART TOTALS</h3>
            </div>
            {/* ======= Subtotal ======= */}
            <div className="subtotal price pb-2 d-flex justify-content-between align-items-center">
                <h5>SUBTOTAL</h5>
                <p>
                    <span>$</span>
                    {totalPrice.toFixed(2)}
                </p>
            </div>
            {/* ======= Grand total ======= */}
            <div className="grand-total price d-flex justify-content-between">
                <h4>GRAND TOTAL</h4>
                <p>
                    <span>$</span>
                    {totalPrice.toFixed(2)}
                </p>
            </div>
            {/* ======= Checkout button ======= */}
            <div className="checkout-btn">
                <Link
                    to="/checkout"
                    className="btn-style btn-style-2 text-center w-100"
                >
                    PROCEED TO CHECKOUT
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(CartTotals);