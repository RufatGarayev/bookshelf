import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToCart, MakingIsInCartTrue } from '../../redux/actions/cartActions';
import { AddToWishlist, MakeIsInWishlistTrue, RemoveFromWishlist } from '../../redux/actions/wishlistActions';
import AddedToCartWindow from '../Other/AddedToCartWindow';
import { Modal } from 'react-bootstrap';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import '../../sass/_book-card.scss';


const BookCard = (props) => {
    const { book } = props;
    const { cart } = props.cart;
    const { wishlist } = props.wishlist;
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleShowAlert = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2500);
    };

    cart.forEach(cartBook => {
        if (cartBook.id === book.id) {
            book.isInCart = true;
        }
    });

    wishlist.forEach(wishlistBook => {
        if (wishlistBook.id === book.id) {
            book.isInWishlist = true;
        }
    });

    const MakeIsInWishlistFalse = () => book.isInWishlist = false;


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
                {/* ======= Remove Button ======= */}
                <div className="remove-from-wishlist-btn">
                    <button
                        onClick={() => {
                            props.RemoveFromWishlist(book.id);
                            MakeIsInWishlistFalse();
                        }}
                    >
                        <RiDeleteBinLine />
                    </button>
                </div>
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
                                    onClick={() => {
                                        props.AddToCart(book);
                                        props.MakingIsInCartTrue(book.id);
                                        handleShow();
                                    }}
                                >
                                    <span><AiOutlineShopping /></span>
                                    <p>Add To Cart</p>
                                </button>
                            )
                        }
                    </div>
                    <div className="btns d-flex">
                        {
                            book.isInWishlist ? (
                                // ======= Remove From Wishlist Button ======= //
                                <span className="btn-wrapper">
                                    <div className="tooltip">
                                        <p>Remove From Wishlist</p>
                                    </div>
                                    <button
                                        className="activeBtn"
                                        onClick={() => {
                                            handleShowAlert();
                                            props.RemoveFromWishlist(book.id);
                                            MakeIsInWishlistFalse();
                                        }}
                                    >
                                        <span className="iconn"><FaRegHeart /></span>
                                    </button>
                                </span>
                            ) : (
                                // ======= Add To Wishlist Button ======= //
                                <span className="btn-wrapper">
                                    <div className="tooltip">
                                        <p>Add To Wishlist</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            handleShowAlert();
                                            props.AddToWishlist(book);
                                            props.MakeIsInWishlistTrue(book.id);
                                        }}
                                    >
                                        <span className="iconn"><FaRegHeart /></span>
                                    </button>
                                </span>
                            )
                        }
                        {/* ======= Add To Compare Button ======= */}
                        <span className="btn-wrapper">
                            <div className="tooltip">
                                <p>Add To Compare</p>
                            </div>
                            <button>
                                <span className="iconn"><FaBalanceScale /></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div >

            {/* ======= AddedToCart Modal ======= */}
            <Modal show={showModal} onHide={handleClose} className="added-to-cart-modal">
                <Modal.Body>
                    <div className="d-flex justify-content-end">
                        <button className="btnClose" onClick={() => handleClose()}>✖</button>
                    </div>
                    <AddedToCartWindow book={book} />
                </Modal.Body>
            </Modal>

            {/* ======= Alert ======= */}
            <div className={showAlert ? "alert-box-wrapper show-alert-box" : "alert-box-wrapper"}>
                {
                    book.isInWishlist ? (
                        <div className="alert-box d-flex align-items-center">
                            <div className="check-icon">
                                <span>✔</span>
                            </div>
                            <div className="alert-text">
                                <h5>Added To Wishlist!</h5>
                                <h6>"{book.title}" is successfully added.</h6>
                            </div>
                        </div>
                    ) : (
                        <div className="alert-box alert-box-remove-style d-flex align-items-center">
                            <div className="remove-icon">
                                <span>✕</span>
                            </div>
                            <div className="alert-text">
                                <h5>Removed From Wishlist!</h5>
                                <h6>"{book.title}" is removed from Wishlist.</h6>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps,
    { AddToCart, MakingIsInCartTrue, AddToWishlist, MakeIsInWishlistTrue, RemoveFromWishlist }
)(BookCard);