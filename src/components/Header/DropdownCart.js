import { RiDeleteBinLine } from 'react-icons/ri';

const DropdownCart = (props) => {

    return (
        <div className="dropdownCart">
            <table>
                <tbody>
                    {
                        props.cart.map(book => (
                            <tr key={book.id}>
                                <td>
                                    <button className="btnClose" type="button" onClick={() => props.deleteBook(book.id)}>
                                        <span className="delete-btn"><RiDeleteBinLine /></span>
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
                                    <ul>
                                        <li>
                                            <h6 className="book-title">
                                                <a href="/#">{book.title}</a>
                                            </h6>
                                        </li>
                                        <li className="d-flex justify-content-between count-and-price">
                                            <span className="book-count">{book.count}</span>
                                            <span className="multiplication">×</span>
                                            <p className="total-price price d-flex align-items-center">
                                                <span>$</span> {(book.price * book.count).toFixed(2)}
                                            </p>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DropdownCart;