import Quantity from '../../Other/Quantity';
import { connect } from 'react-redux';
import { DeleteBook, IncreaseBookCount, DecreaseBookCount } from '../../../redux/actions/cartActions';

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
                                    <button className="btnClose" type="button" onClick={() => props.DeleteBook(book.id)}>
                                        <i className="flaticon-delete"></i>
                                    </button>
                                </td>
                                <td>
                                    <div className="book-img">
                                        <a href="/#">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" src={book.img} alt="book" />
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <h6 className="book-title">
                                        <a href="/#">{book.title}</a>
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
        cart: state.cart
    }
};

export default connect(mapStateToProps, { DeleteBook, IncreaseBookCount, DecreaseBookCount })(CartTable);