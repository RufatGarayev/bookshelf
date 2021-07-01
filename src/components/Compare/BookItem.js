import React, { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import AddedToCartWindow from '../Other/AddedToCartWindow';
import { connect } from 'react-redux';
import { AddToCart, MakingIsInCartTrue } from '../../redux/actions/cartActions';
import { RemoveFromCompare } from '../../redux/actions/compareActions';
import { MakeIsInCompareFalse } from '../../redux/actions/bookActions';

const BookItem = (props) => {
    const { book } = props;
    const { cart } = props.cart;
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    cart.forEach(cartBook => {
        if (cartBook.id === book.id) {
            book.isInCart = cartBook.isInCart;
        }
    });

    return (
        <>
            <div className="compare-book-item">
                <div className="top-part box">
                    {/* ======= Remove button ======= */}
                    <div className="remove-btn">
                        <button
                            onClick={() => {
                                props.RemoveFromCompare(book.id);
                                props.MakeIsInCompareFalse(book.id);
                            }}
                        >
                            <span><RiDeleteBinLine /></span>
                        </button>
                    </div>
                    {/* ======= Image ======= */}
                    <div className="book-img">
                        <Link to={`/book-details/${book.id}`}>
                            <img className="img-fluid" src={book.img} alt={book.title} />
                        </Link>
                    </div>
                </div>
                <div className="middle-part">
                    {/* ======= Title ======= */}
                    <div className="title">
                        <h6>
                            <Link to={`/book-details/${book.id}`}>
                                {book.title}
                            </Link>
                        </h6>
                    </div>
                    {/* ======= Price ======= */}
                    <div className="price">
                        <p><span>$</span>{book.price.toFixed(2)}</p>
                    </div>
                    {/* ======= Description ======= */}
                    <div className="description box">
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                    {/* ======= Genre ======= */}
                    <div className="genre box">
                        <p>{book.genre}</p>
                    </div>
                    {/* ======= Rating ======= */}
                    <div className="rating box">
                        <span>{book.rating}</span>
                    </div>
                </div>
                <div className="bottom-part box d-flex align-items-center">
                    <div className="add-to-cart-btn d-flex justify-content-center">
                        {
                            book.isInCart ? (
                                // ======= Added To Cart button ======= //
                                <button
                                    type="button"
                                    className="disabledBtn btn-style-2 d-flex align-items-center"
                                    disabled="disabled"
                                >
                                    <span><AiOutlineShopping /></span>
                                    <p>Added To Cart</p>
                                </button>
                            ) : (
                                // ======= Add To Cart button ======= //
                                <button
                                    type="button"
                                    className="d-flex btn-style-2 align-items-center"
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
                </div>
            </div>

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
        RemoveFromCompare, MakeIsInCompareFalse,
        AddToCart, MakingIsInCartTrue
    }
)(BookItem);