import { useState } from 'react';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { connect } from 'react-redux';
import AddedToCartWindow from '../Other/AddedToCartWindow';
import { Modal } from 'react-bootstrap';
import { AddToCart, MakingIsInCartTrue } from '../../redux/actions/cartActions';
import {
    AddToWishlist, RemoveFromWishlist,
    MakeIsInWishlistTrueInWishlist
} from '../../redux/actions/wishlistActions';
import {
    AddToCompare, RemoveFromCompare,
    MakeIsInCompareTrueInCompare
} from '../../redux/actions/compareActions';
import { MakeIsInWishlistFalse, MakeIsInCompareFalse } from '../../redux/actions/bookActions';
import CheckoutImg from '../../assets/img/other/checkout.png';

const ExtensiveInfo = (props) => {
    const { book } = props;
    const { cart } = props.cart;
    const { wishlist } = props.wishlist;
    const { compare } = props.compare;
    const [height, setHeight] = useState(false);
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
                                className="disabledBtn d-flex justify-content-center align-items-center btn-style-2"
                                disabled="disabled"
                            >
                                <span><AiOutlineShopping /></span>
                                <p>Added To Cart</p>
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="d-flex justify-content-center align-items-center btn-style-2"
                                onClick={() => { props.AddToCart(book); props.MakingIsInCartTrue(book.id); handleShow() }}
                            >
                                <span><AiOutlineShopping /></span>
                                <p>Add To Cart</p>
                            </button>
                        )
                    }
                </div>
                <div className="bottom-btns d-flex">
                    <div className="add-to-wishlist">
                        {
                            book.isInWishlist ? (
                                // ======= Remove From Wishlist Button ======= //
                                <button
                                    onClick={() => {
                                        props.RemoveFromWishlist(book.id);
                                        props.MakeIsInWishlistFalse(book.id);
                                    }}
                                >
                                    <span><FaRegHeart /></span> Remove From Wishlist
                                </button>
                            ) : (
                                // ======= Add To Wishlist Button ======= //
                                <button
                                    onClick={() => {
                                        props.AddToWishlist(book);
                                        props.MakeIsInWishlistTrueInWishlist(book.id);
                                    }}
                                >
                                    <span><FaRegHeart /></span> Add To Wishlist
                                </button>
                            )
                        }
                    </div>
                    <div className="add-to-compare">
                        {
                            book.isInCompare ? (
                                // ======= Remove From Compare Button ======= //
                                <button
                                    onClick={() => {
                                        props.RemoveFromCompare(book.id);
                                        props.MakeIsInCompareFalse(book.id);
                                    }}
                                >
                                    <span><FaBalanceScale /></span> Remove From Compare
                                </button>
                            ) : (
                                // ======= Add To Compare Button ======= //
                                <button
                                    onClick={() => {
                                        props.AddToCompare(book);
                                        props.MakeIsInCompareTrueInCompare(book.id);
                                    }}
                                >
                                    <span><FaBalanceScale /></span> Add To Compare
                                </button>
                            )
                        }
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
        AddToCart, MakingIsInCartTrue, AddToWishlist, RemoveFromWishlist,
        MakeIsInWishlistTrueInWishlist, MakeIsInWishlistFalse, AddToCompare,
        RemoveFromCompare, MakeIsInCompareTrueInCompare, MakeIsInCompareFalse
    }
)(ExtensiveInfo);