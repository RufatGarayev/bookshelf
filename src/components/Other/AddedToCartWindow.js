import { Link } from 'react-router-dom';

const AddedToCartWindow = (props) => {
    const { book } = props;

    return (
        <div className="added-to-cart-window">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        {/* ======= Title ======= */}
                        <div className="added-to-cart-title text-center">
                            <h5><span>✓</span> Added to cart successfully!</h5>
                        </div>
                        {/* ======= Image ======= */}
                        <div className="img-holder d-flex justify-content-center">
                            <img className="img-fluid" src={book.img} alt={book.title} />
                        </div>
                        {/* ======= Book title and price ======= */}
                        <div className="info text-center">
                            <h6>
                                <Link to={`/book-details/${book.id}`}>{book.title}</Link>
                            </h6>
                            <p className="price">
                                PRICE:
                                <span className="dollarSign">$</span>
                                <span className="mark-span">{book.price.toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content d-flex flex-column justify-content-between">
                        <div className="wrapper">
                            {/* ======= Other info ======= */}
                            <div className="info text-center">
                                <p className="paragraph">There are {book.count} items in your cart</p>
                                <p className="total-price price">
                                    TOTAL:
                                    <span className="dollarSign">$</span>
                                    <span className="mark-span">{book.price.toFixed(2)}</span>
                                </p>
                            </div>
                            {/* ======= Buttons ======= */}
                            <div className="btns d-flex flex-column align-items-between justify-content-evenly">
                                <Link to="/shop" className="btn-style">Continue Shopping</Link>
                                <Link to="/cart" className="btn-style">View Cart</Link>
                                <Link
                                    to="/checkout"
                                    className="btn-style checkout-btn"
                                >
                                    Proceed To Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddedToCartWindow;