import Input from '../Other/Input';
import { Link } from "react-router-dom";

const ShippingAddress = (props) => {
    return (
        <div className="shipping-address ">
            <div className="top-content d-flex">
                <h6 className="address">Shipping Address</h6>
                <h6 className="payment">Payment Details</h6>
            </div>
            <div className="form-area">
                <form onSubmit={(e) => { props.handleShippingSubmit(); e.preventDefault(); }}>
                    <h5>Shipping Address</h5>
                    <div className="row">
                        <div className="col-12">
                            <Input type="text" id="fullname" placeholder="Full Name *" />
                        </div>
                        <div className="col-12">
                            <Input type="email" id="email" placeholder="Email *" />
                        </div>
                        <div className="col-12">
                            <Input type="text" id="address" placeholder="Address *" />
                        </div>
                        <div className="col-12">
                            <Input type="text" id="city" placeholder="City *" />
                        </div>
                        <div className="col-12">
                            <Input type="text" id="postal-code" placeholder="ZIP / Postal Code *" />
                        </div>
                        <div className="col-lg-6">
                            <div className="select-wrapper d-flex flex-column">
                                <label htmlFor="shipping-country">Shipping Country</label>
                                <select id="shipping-country">
                                    <option value="az">Azerbaijan</option>
                                    <option value="tr">Turkey</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="il">Israel</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="ukr">Ukraine</option>
                                    <option value="it">Italy</option>
                                    <option value="eg">Egypt</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="select-wrapper d-flex flex-column">
                                <label htmlFor="shipping-options">Shipping Options</label>
                                <select id="shipping-options">
                                    <option value="int">International - ($10.00)</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bottom-content d-flex">
                                <Link to="/cart" className="back-to-cart">BACK TO CART</Link>
                                <button
                                    type="submit"
                                    className="btn-style-2"
                                >
                                    NEXT
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShippingAddress;