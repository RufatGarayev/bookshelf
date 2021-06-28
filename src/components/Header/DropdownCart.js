import { Link } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineShopping } from 'react-icons/ai';

const DropdownCart = (props) => {
    const totalPrice = props.cart.reduce((total, book) => (total += book.price * book.count), 0);

    return (
        <div className="dropdownCart">
            {
                props.cart.length > 0 ? (
                    <>
                        <table>
                            <tbody className="table-body">
                                {
                                    props.cart.map(book => (
                                        <tr key={book.id}>
                                            <td>
                                                <button
                                                    className="remove-btn"
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        props.deleteBook(book.id);
                                                        props.makeIsInCartFalse(book.id);
                                                        props.wishlistBookIsInCartFalse(book.id);
                                                        props.compareBookIsInCartFalse(book.id);
                                                    }}
                                                >
                                                    <span className="delete-btn"><RiDeleteBinLine /></span>
                                                </button>
                                            </td>
                                            <td>
                                                <div className="book-img">
                                                    <Link
                                                        to={`/book-details/${book.id}`}
                                                        onClick={() => window.location.href = `/book-details/${book.id}`}
                                                    >
                                                        <div className="img-wrapper">
                                                            <img className="img-fluid" src={book.img} alt="book" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <h6 className="book-title">
                                                            <Link
                                                                to={`/book-details/${book.id}`}
                                                                onClick={() => window.location.href = `/book-details/${book.id}`}
                                                            >
                                                                {book.title}
                                                            </Link>
                                                        </h6>
                                                    </li>
                                                    <li className="d-flex count-and-price">
                                                        <span className="book-count">{book.count}</span>
                                                        <span className="multiplication">×</span>
                                                        <p className="total-price price d-flex align-items-center">
                                                            <span>$</span> {book.price.toFixed(2)}
                                                        </p>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div className="total-area">
                            <div className="top-content d-flex justify-content-between">
                                <h6>SUBTOTAL</h6>
                                <p><span>$</span>{totalPrice.toFixed(2)}</p>
                            </div>
                            <div className="checkout-btn d-flex">
                                <Link
                                    to="/checkout"
                                    className="btn-style-2 w-100 text-center"
                                >
                                    Proceed To Checkout
                                </Link>
                            </div>
                            <div className="view-cart-btn text-center">
                                <Link to="/cart">View Cart</Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart">
                        <div className="shopping-icon d-flex justify-content-center">
                            <AiOutlineShopping />
                        </div>
                        <div className="alert-text text-center">
                            <p className="paragraph">
                                No products in the Cart
                            </p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default DropdownCart;