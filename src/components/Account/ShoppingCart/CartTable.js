import Quantity from './Quantity';
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { DeleteBook, IncreaseBookCount, DecreaseBookCount } from '../../../redux/actions/cartActions';
import { WishlistBookIsInCartFalse } from '../../../redux/actions/wishlistActions';
import { MakeIsInCartFalse } from '../../../redux/actions/bookActions';

const CartTable = (props) => {
    const { cart } = props.cart;

    return (
        <div className="cart-table">
            <table className="w-100">
                <tbody>
                    {
                        cart.map(book => (
                            <tr key={book.id}>
                                <td>
                                    <button
                                        className="btnClose"
                                        type="button"
                                        onClick={() => {
                                            props.DeleteBook(book.id);
                                            props.MakeIsInCartFalse(book.id);
                                            props.WishlistBookIsInCartFalse(book.id);
                                        }}
                                    >
                                        <span className="delete-btn"><RiDeleteBinLine /></span>
                                    </button>
                                </td>
                                <td>
                                    <div className="book-img">
                                        <Link to={`/book-details/${book.id}`}>
                                            <div className="img-wrapper">
                                                <img className="img-fluid" src={book.img} alt="book" />
                                            </div>
                                        </Link>
                                    </div>
                                </td>
                                <td>
                                    <h6 className="book-title">
                                        <Link to={`/book-details/${book.id}`}>{book.title}</Link>
                                    </h6>
                                </td>
                                <td>
                                    <p className="book-price price"><span>$</span>{book.price.toFixed(2)}</p>
                                </td>
                                <td>
                                    <div className="quantity-wrapper">
                                        <Quantity
                                            book={book}
                                            increaseBook={props.IncreaseBookCount}
                                            decreaseBook={props.DecreaseBookCount}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <p className="total-price price d-flex align-items-center">
                                        <span>$</span> {(book.price * book.count).toFixed(2)}
                                    </p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        books: state.books
    }
};

export default connect(mapStateToProps,
    { DeleteBook, IncreaseBookCount, DecreaseBookCount, WishlistBookIsInCartFalse, MakeIsInCartFalse }
)(CartTable);