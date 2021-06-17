import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToCart, MakingIsInCartTrue } from '../../redux/actions/cartActions';
import AddedToCartWindow from '../Other/AddedToCartWindow';
import { Modal } from 'react-bootstrap';
import { FaBalanceScale, FaRegHeart, FaRegEye } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import '../../sass/_book-card.scss';


const BookCard = (props) => {
    const { book } = props;
    const { cart } = props.cart;
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
            <div className="book-item d-flex">
                {/* ======= Label ======= */}
                {
                    book.label !== "" ?
                        <div className="label">
                            <span className={book.label === "New" ? "new-background" : ""}>{book.label}</span>
                        </div> : ""
                }
                {/* ======= Image ======= */}
                <div className="img-wrapper">
                    <Link to={`/book-details/${book.id}`}>
                        <img className="img-fluid" src={book.img} alt="book" />
                    </Link>
                </div>
                <div className="bottom-content w-100 d-flex flex-column align-items-center">
                    {/* ======= Rating ======= */}
                    <div className="rating">
                        <span>{book.rating}</span>
                    </div>
                    {/* ======= Title and Author ======= */}
                    <div className="title-author">
                        <Link to={`/book-details/${book.id}`}>
                            <h6>{book.title}</h6>
                        </Link>
                        <p>{book.author}</p>
                    </div>
                    {/* ======= Price ======= */}
                    <div className="price d-flex justify-content-center">
                        <div className="current-price">
                            <p><span>$</span>{book.price.toFixed(2)}</p>
                        </div>
                        <div className="previous-price">
                            {
                                book.hasDiscount ?
                                    <div>
                                        <p><span>$</span>{book.previousPrice.toFixed(2)}</p>
                                    </div> : ""
                            }
                        </div>
                    </div>
                    {/* ======= Add to Cart Button ======= */}
                    <div className="add-to-cart-btn d-flex justify-content-center">
                        {
                            book.isInCart ? (
                                <button
                                    type="button"
                                    className="disabledBtn d-flex"
                                    disabled="disabled"
                                >
                                    <span><AiOutlineShopping /></span>
                                    <p>Added To Cart</p>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="d-flex"
                                    onClick={() => { props.AddToCart(book); props.MakingIsInCartTrue(book.id); handleShow() }}
                                >
                                    <span><AiOutlineShopping /></span>
                                    <p>Add To Cart</p>
                                </button>
                            )
                        }
                    </div>
                    {/* ======= Other Buttons ======= */}
                    <div className="btns d-flex">
                        <span className="btn-wrapper">
                            <div className="tooltip">
                                <p>Quick View</p>
                            </div>
                            <span className="iconn"><FaRegEye /></span>
                        </span>
                        <span className="btn-wrapper">
                            <div className="tooltip">
                                <p>Add To Wishlist</p>
                            </div>
                            <span className="iconn"><FaRegHeart /></span>
                        </span>
                        <span className="btn-wrapper">
                            <div className="tooltip">
                                <p>Add To Compare</p>
                            </div>
                            <span className="iconn"><FaBalanceScale /></span>
                        </span>
                    </div>
                </div>
            </div >

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

export default connect(mapStateToProps, { AddToCart, MakingIsInCartTrue })(BookCard);