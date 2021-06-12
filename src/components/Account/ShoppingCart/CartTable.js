import Quantity from '../../Other/Quantity';

const CartTable = () => {
    return (
        <div className="cart-table">
            <table className="w-100">
                <tbody>
                    <tr>
                        <td>
                            <button className="btn-close" type="button">
                                <i className="flaticon-delete"></i>
                            </button>
                        </td>
                        <td>
                            <div className="book-img">
                                <a href="/#">
                                    <img src="" alt="book" />
                                </a>
                            </div>
                        </td>
                        <td>
                            <h6 className="book-title">
                                <a href="/#">Book Title</a>
                            </h6>
                        </td>
                        <td>
                            <p className="book-price price"><span>$</span> 25.00</p>
                        </td>
                        <td>
                            <div className="quantity-wrapper">
                                <Quantity />
                            </div>
                        </td>
                        <td>
                            <p className="total-price price d-flex align-items-center">
                                <span>$</span> 25.00
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartTable;