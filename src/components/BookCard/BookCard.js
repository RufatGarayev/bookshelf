import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    AddToCart,
    MakingIsInCartTrue
} from '../../redux/actions/cartActions';
import {
    AddToWishlist, RemoveFromWishlist,
    MakeIsInWishlistTrueInWishlist
} from '../../redux/actions/wishlistActions';
import {
    AddToCompare, RemoveFromCompare,
    MakeIsInCompareTrueInCompare
} from '../../redux/actions/compareActions';
import {
    MakeIsInWishlistFalse,
    MakeIsInCompareFalse
} from '../../redux/actions/bookActions';
import AddedToCartWindow from '../Other/AddedToCartWindow';
import { Modal } from 'react-bootstrap';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';


const BookCard = (props) => {
    const { book } = props;
    const { cart } = props.cart;
    const { wishlist } = props.wishlist;
    const { compare } = props.compare;
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    cart.forEach(cartBook => {
        if (cartBook.id === book.id) {
            book.isInCart = cartBook.isInCart;
        }
    });

    wishlist.forEach(wishlistBook => {
        if (wishlistBook.id === book.id) {
            book.isInWishlist = wishlistBook.isInWishlist;
        }
    });

    compare.forEach(compareBook => {
        if (compareBook.id === book.id) {
            book.isInCompare = compareBook.isInCompare;
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
                {/* ======= Remove Button ======= */}
                <div className="remove-from-wishlist-btn">
                    <button
                        onClick={() => {
                            props.RemoveFromWishlist(book.id);
                            props.MakeIsInWishlistFalse(book.id);
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
                                    className="disabledBtn btn-style d-flex align-items-center"
                                    disabled="disabled"
                                >
                                    <span><AiOutlineShopping /></span>
                                    <p>Added To Cart</p>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="d-flex align-items-center btn-style"
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
                                            props.RemoveFromWishlist(book.id);
                                            props.MakeIsInWishlistFalse(book.id);
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
                                            props.AddToWishlist(book);
                                            props.MakeIsInWishlistTrueInWishlist(book.id);
                                        }}
                                    >
                                        <span className="iconn"><FaRegHeart /></span>
                                    </button>
                                </span>
                            )
                        }
                        {
                            book.isInCompare ? (
                                // ======= Remove From Compare Button ======= //
                                <span className="btn-wrapper">
                                    <div className="tooltip">
                                        <p>Remove From Compare</p>
                                    </div>
                                    <button
                                        className="activeBtn"
                                        onClick={() => {
                                            props.RemoveFromCompare(book.id);
                                            props.MakeIsInCompareFalse(book.id);
                                        }}
                                    >
                                        <span className="iconn"><FaBalanceScale /></span>
                                    </button>
                                </span>
                            ) : (
                                // ======= Add To Compare Button ======= //
                                <span className="btn-wrapper">
                                    <div className="tooltip">
                                        <p>Add To Compare</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            props.AddToCompare(book);
                                            props.MakeIsInCompareTrueInCompare(book.id);
                                        }}
                                    >
                                        <span className="iconn"><FaBalanceScale /></span>
                                    </button>
                                </span>
                            )
                        }
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
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps,
    {
        AddToCart, MakingIsInCartTrue, AddToWishlist, MakeIsInCompareFalse,
        MakeIsInWishlistFalse, RemoveFromWishlist, MakeIsInWishlistTrueInWishlist,
        AddToCompare, RemoveFromCompare, MakeIsInCompareTrueInCompare
    }
)(BookCard);