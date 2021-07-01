import { useState } from 'react';
import Title from '../Other/Title';
import ShippingAddress from './ShippingAddress';
import PaymentDetails from './PaymentDetails';
import FinishCheckout from './FinishCheckout';
import Spinner from '../Other/Spinner';
import { connect } from 'react-redux';
import { ClearCart } from '../../redux/actions/cartActions';
import { MakeIsInCartFalse } from '../../redux/actions/bookActions';
import { CompareBookIsInCartFalse } from '../../redux/actions/compareActions';
import { WishlistBookIsInCartFalse } from '../../redux/actions/wishlistActions';

const CheckoutContent = (props) => {
    const { cart } = props.cart;
    const [showCheckoutPages, setShowCheckoutPages] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleShippingAddressSubmit = () => setShowCheckoutPages(false);
    const backToShippingAddress = () => setShowCheckoutPages(true);

    const handlePaymentDetailsSubmit = () => {
        setShowCheckoutPages("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            props.ClearCart();
            cart.forEach(cartBook => props.MakeIsInCartFalse(cartBook.id));
            cart.forEach(cartBook => props.CompareBookIsInCartFalse(cartBook.id));
            cart.forEach(cartBook => props.WishlistBookIsInCartFalse(cartBook.id));
        }, 2000);
    };

    return (
        <section id="checkout">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="checkout-content">
                            <div className="row">
                                <div className="col-12">
                                    {/* ======= Title ======= */}
                                    <Title title="Checkout" />
                                </div>
                            </div>
                            {
                                showCheckoutPages ? (
                                    // ======= Shipping Address ======= //
                                    <div className="shipping-address-wrapper">
                                        <ShippingAddress
                                            handleShippingSubmit={handleShippingAddressSubmit}
                                        />
                                    </div>
                                ) : showCheckoutPages === false ? (
                                    // ======= Payment Details ======= //
                                    <div className="payment-details-wrapper">
                                        <PaymentDetails
                                            cart={cart}
                                            back={backToShippingAddress}
                                            handlePaymentSubmit={handlePaymentDetailsSubmit}
                                        />
                                    </div>
                                ) : (
                                    loading ? (
                                        <Spinner />
                                    ) : (
                                        // ======= Checkout - End ======= //
                                        <div className="finish-checkout">
                                            <FinishCheckout cart={cart} />
                                        </div>
                                    )
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

export default connect(mapStateToProps,
    {
        ClearCart, MakeIsInCartFalse,
        WishlistBookIsInCartFalse, CompareBookIsInCartFalse
    }
)(CheckoutContent);