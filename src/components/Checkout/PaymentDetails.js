import VisaImg from '../../assets/img/other/visa.png';

const PaymentDetails = (props) => {
    const totalPrice = props.cart.reduce((total, book) => (total += book.price * book.count), 0);

    return (
        <div className="payment-details">
            <div className="top-content d-flex">
                <h6 className="address">Shipping Address</h6>
                <h6 className="payment">Payment Details</h6>
            </div>
            <div className="order-summary-area">
                <h5>Order Summary</h5>
                {
                    props.cart.map(book => (
                        <div
                            key={book.id}
                            className="order-summary-item d-flex justify-content-between align-items-center"
                        >
                            <div className="title-and-quantity">
                                <h6 className="book-title">{book.title}</h6>
                                <p className="book-quantity">Quantity: {book.count}</p>
                            </div>
                            <div className="price">
                                <p>
                                    <span>$</span>{(book.price * book.count).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))
                }
                <div className="total d-flex justify-content-between align-items-center">
                    <h6>Total</h6>
                    <p>
                        <span>$</span>{totalPrice.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="bottom-content">
                <form onSubmit={(e) => { props.handlePaymentSubmit(); e.preventDefault(); }}>
                    <div className="payment-method">
                        <h5>Payment Method</h5>
                        <div className="d-flex">
                            <div className="visa-img">
                                <img className="img-fluid" src={VisaImg} alt="visa" />
                            </div>
                            <div className="input-wrapper">
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    id="card-number"
                                    autoComplete="cc-number"
                                    maxLength="19"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    pattern="[0-9\s]{13,19}"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btns d-flex justify-content-between align-items-center">
                        <button
                            type="button"
                            className="back-to"
                            onClick={(e) => props.back()}
                        >
                            BACK
                        </button>
                        <button
                            type="submit"
                            className="btn-style-2"
                        >
                            PAY <span>$</span>{totalPrice.toFixed(2)}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentDetails;