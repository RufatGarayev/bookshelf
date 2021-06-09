import React from 'react';
import '../../sass/_book-card.scss';
import { RiShoppingBagLine, RiScalesFill, RiHeartLine } from 'react-icons/ri';
import { ImEye } from 'react-icons/im';


const BookCard = ({ book }) => {
    return (
        <div className="book-item d-flex">
            {/* ======= Label ======= */}
            {
                book.label !== "" ?
                    <div className="label">
                        <span>{book.label}</span>
                    </div> : ""
            }
            {/* ======= Image ======= */}
            <div className="img-wrapper">
                <a href="/#"><img className="img-fluid" src={book.img} alt="book" /></a>
            </div>
            <div className="bottom-content w-100 d-flex flex-column align-items-center">
                {/* ======= Rating ======= */}
                <div className="rating">
                    <span>{book.rating}</span>
                </div>
                {/* ======= Title and Author ======= */}
                <div className="title-author">
                    <a href="/#"><h6>{book.title}</h6></a>
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
                    <button type="button" className="d-flex">
                        <span><RiShoppingBagLine /></span>
                        <p>Add To Cart</p>
                    </button>
                </div>
                {/* ======= Other Buttons ======= */}
                <div className="btns d-flex">
                    <span>
                        <div className="tooltip">
                            <p>Quick View</p>
                        </div>
                        <ImEye />
                    </span>
                    <span>
                        <div className="tooltip">
                            <p>Add To Wishlist</p>
                        </div>
                        <RiScalesFill />
                    </span>
                    <span>
                        <div className="tooltip">
                            <p>Add To Compare</p>
                        </div>
                        <RiHeartLine />
                    </span>
                </div>
            </div>
        </div>
    )
}


export default BookCard;