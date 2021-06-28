import { useState } from 'react';
import Title from '../Other/Title';
import ShippingAddress from './ShippingAddress';
import PaymentDetails from './PaymentDetails';
import FinishCheckout from './FinishCheckout';
import { ClearCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const CheckoutContent = (props) => {
    const { cart } = props.cart;
    const [showCheckoutPages, setShowCheckoutPages] = useState(true);

    const handleShippingAddressSubmit = () => setShowCheckoutPages(false);
    const backToShippingAddress = () => setShowCheckoutPages(true);
    const handlePaymentDetailsSubmit = () => setShowCheckoutPages(null);

    return (
        <section id="checkout">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="checkout-content">
                            <div className="row">
                                <div className="col-12">
                                    <Title title="Checkout" />
                                </div>
                            </div>
                            {
                                showCheckoutPages ? (
                                    <div className="shipping-address-wrapper">
                                        <ShippingAddress
                                            handleShippingSubmit={handleShippingAddressSubmit}
                                        />
                                    </div>
                                ) : showCheckoutPages === false ? (
                                    <div className="payment-details-wrapper">
                                        <PaymentDetails
                                            cart={cart}
                                            back={backToShippingAddress}
                                            clearCart={props.ClearCart}
                                            handlePaymentSubmit={handlePaymentDetailsSubmit}
                                        />
                                    </div>
                                ) : (
                                    <div className="finish-checkout">
                                        <FinishCheckout cart={cart} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps, { ClearCart })(CheckoutContent);