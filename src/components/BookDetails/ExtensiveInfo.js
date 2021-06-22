import { useState } from 'react';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { connect } from 'react-redux';
import AddedToCartWindow from '../Other/AddedToCartWindow';
// import PrimaryInfo from './PrimaryInfo';
import { Modal } from 'react-bootstrap';
import { AddToCart, MakingIsInCartTrue } from '../../redux/actions/cartActions';
import CheckoutImg from '../../assets/img/other/checkout.png';

const ExtensiveInfo = (props) => {
    const { book } = props;
    const { cart } = props.cart;
    const [height, setHeight] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    cart.forEach(cartBook => {
        if (cartBook.id === book.id) {
            book.isInCart = true;
        }
    });

    return (
        <>
            <div className="book-info">
                {/* ======= Label ======= */}
                {
                    book.label !== "" ?
                        <div className="label">
                            <span className={book.label === "New" ? "new-background" : null}>{book.label}</span>
                        </div> : ""
                }
                {/* ======= Primary info ======= */}
                <div className="primary-info-wrapper">
                    <div className="book-primary-info">
                        <h3>{book.title}</h3>
                        <p className="book-price"><span>$</span>{book.price.toFixed(2)}</p>
                        <span className="book-rating">{book.rating}</span>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
                {/* ======= Add-to-cart btn ======= */}
                <div className="add-to-cart-btn">
                    {
                        book.isInCart ? (
                            <button
                                type="button"
                                className="disabledBtn d-flex justify-content-center align-items-center btn-style"
                                disabled="disabled"
                            >
                                <span><AiOutlineShopping /></span>
                                <p>Added To Cart</p>
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="d-flex justify-content-center align-items-center btn-style"
                                onClick={() => { props.AddToCart(book); props.MakingIsInCartTrue(book.id); handleShow() }}
                            >
                                <span><AiOutlineShopping /></span>
                                <p>Add To Cart</p>
                            </button>
                        )
                    }
                </div>
                {/* ======= Bottom buttons ======= */}
                <div className="bottom-btns d-flex">
                    <div className="add-to-wishlist">
                        <button><span><FaRegHeart /></span> Add To Wishlist</button>
                    </div>
                    <div className="add-to-compare">
                        <button><span><FaBalanceScale /></span> Add To Compare</button>
                    </div>
                </div>
                {/* ======= Checkout img ======= */}
                <div className="payment">
                    <img className="img-fluid" src={CheckoutImg} alt="checkout" />
                </div>
                {/* ======= Additional information ======= */}
                <div className="additional-information">
                    <button onClick={() => setHeight(!height)}>ADDITIONAL INFORMATION</button>
                    <div className={height ? "show-text" : "text"}>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eligendi culpa nemo iure rem voluptatum neque perspiciatis doloremque nihil ipsum,
                            numquam ratione asperiores explicabo. Eum excepturi, est at officiis sit cumque!
                        </p>
                    </div>
                </div>
            </div>

            {/* ======= AddedToCart Modal ======= */}
            <Modal show={show} onHide={handleClose} className="added-to-cart-modal">
                <Modal.Body>
                    <div className="d-flex justify-content-end">
                        <button className="btnClose" onClick={() => handleClose()}>✖</button>
                    </div>
                    <AddedToCartWindow book={book} />
                </Modal.Body>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { AddToCart, MakingIsInCartTrue })(ExtensiveInfo);