import Quantity from './Quantity';
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import {
    DeleteBook, IncreaseBookCount,
    DecreaseBookCount
} from '../../redux/actions/cartActions';
import { WishlistBookIsInCartFalse } from '../../redux/actions/wishlistActions';
import { CompareBookIsInCartFalse } from '../../redux/actions/compareActions';
import { MakeIsInCartFalse } from '../../redux/actions/bookActions';

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
                                    {/* ======= Remove button ======= */}
                                    <div className="remove-btn">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                props.DeleteBook(book.id);
                                                props.MakeIsInCartFalse(book.id);
                                                props.WishlistBookIsInCartFalse(book.id);
                                                props.CompareBookIsInCartFalse(book.id);
                                            }}
                                        >
                                            <span><RiDeleteBinLine /></span>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    {/* ======= Image ======= */}
                                    <div className="book-img">
                                        <Link to={`/book-details/${book.id}`}>
                                            <div className="img-wrapper">
                                                <img className="img-fluid" src={book.img} alt="book" />
                                            </div>
                                        </Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-right d-flex align-items-center">
                                        {/* ======= Title ======= */}
                                        <div className="book-title">
                                            <h6>
                                                <Link to={`/book-details/${book.id}`}>
                                                    {book.title}
                                                </Link>
                                            </h6>
                                        </div>
                                        <ul className="d-flex align-items-center price-and-quantity">
                                            <li>
                                                {/* ======= Price ======= */}
                                                <p className="book-price price"><span>$</span>{book.price.toFixed(2)}</p>
                                            </li>
                                            <li>
                                                {/* ======= Quantity ======= */}
                                                <div className="quantity-wrapper">
                                                    <Quantity
                                                        book={book}
                                                        increaseBook={props.IncreaseBookCount}
                                                        decreaseBook={props.DecreaseBookCount}
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                {/* ======= Total price ======= */}
                                                <p className="total-price price d-flex align-items-center">
                                                    <span>$</span> {(book.price * book.count).toFixed(2)}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
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
    {
        DeleteBook, IncreaseBookCount, DecreaseBookCount,
        WishlistBookIsInCartFalse, MakeIsInCartFalse, CompareBookIsInCartFalse
    }
)(CartTable);