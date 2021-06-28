import { Link } from "react-router-dom";

const FinishCheckout = () => {
    return (
        <div className="finish-checkout">
            <div className="top-content d-flex">
                <h6 className="address">Shipping Address</h6>
                <h6 className="payment">Payment Details</h6>
            </div>
            <div className="middle-content">
                <div className="title">
                    <h6>Thank You, your order was completed successfully.</h6>
                </div>
            </div>
            <div className="back-to-home">
                <Link to="/">BACK TO HOME</Link>
            </div>
        </div>
    )
}

export default FinishCheckout;