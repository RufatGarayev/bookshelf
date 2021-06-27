import Title from '../Other/Title';
import ShippingAddress from './ShippingAddress';

const CheckoutContent = () => {
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
                            <div className="shipping-address-wrapper">
                                <ShippingAddress />
                            </div>
                            <div className="payment-details-wrapper">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CheckoutContent;