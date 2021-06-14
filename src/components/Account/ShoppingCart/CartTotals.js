import { connect } from 'react-redux';

const CartTotals = (props) => {
    const {cart} = props.cart;
    const totalPrice = cart.reduce((total, book) => (total += book.price), 0);

    return (
        <div className="cart-totals">
            <div className="cart-totals-title">
                <h3>CART TOTALS</h3>
            </div>
            <div className="subtotal price pb-2 d-flex justify-content-between align-items-center">
                <h5>SUBTOTAL</h5>
                <p>
                    <span>$</span>
                    25.00
                </p>
            </div>
            <div className="grand-total price d-flex justify-content-between">
                <h4>GRAND TOTAL</h4>
                <p>
                    <span>$</span>
                    {totalPrice}
                </p>
            </div>
            <div className="checkout-btn">
                <button className="btn-style btn-style-2">PROCEED TO CHECKOUT</button>
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