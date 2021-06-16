const Info = (props) => {
    const { book } = props;

    return (
        <div className="book-info">
            {
                book.label ? (
                    <div className="book-label">
                        <span>{book.label}</span>
                    </div>
                ) : ("")
            }
            <div className="title-and-others">
                <h4>{book.title}</h4>
                <p>${book.price.toFixed(2)}</p>
                <span>{book.rating}</span>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <div className="quantity-and-buttons">
                <div className="row">
                    <div className="col-4">
                        <div className="quantity-area d-flex align-items-center">
                            <button
                                className="minus-btn"
                                disabled={book.count === 1 ? "disabled" : null}
                            >
                                −
                            </button>
                            <input type="text" size="2" readOnly value={book.count} />
                            <button
                                className="plus-btn"
                                disabled={book.count === 10 ? "disabled" : null}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="add-to-cart-btn">
                            <button
                                type="button"
                                className="d-flex justify-content-center align-items-center btn-style"
                            >
                                <span><i className="flaticon-shopping-bag"></i></span>
                                <p>Add To Cart</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom-btns d-flex">
                    <div className="add-to-wishlist">
                        <button>Add To Wishlist</button>
                    </div>
                    <div className="add-to-compare">
                        <button>Add To Compare</button>
                    </div>
                </div>
            </div>
            <div className="payment"></div>
        </div>
    )
}

export default Info;