import React, { useState } from 'react';
import Brand from '../Other/Brand';
import { NavMenuData, ButtonsData } from './HeaderData';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { DeleteBook } from '../../redux/actions/cartActions';
import { WishlistBookIsInCartFalse } from '../../redux/actions/wishlistActions';
import { MakeIsInCartFalse } from '../../redux/actions/bookActions';
import DropdownCart from './DropdownCart';
import '../../sass/_header.scss';

const Header = (props) => {
    const { cart } = props.cart;
    const { books } = props.books;
    const [shadow, setShadow] = useState(false);
    const [clickedBtnId, setClickedBtnId] = useState("");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    });

    return (
        <div className={shadow ? "header-shadow header" : "header"}>
            <div className="container">
                <div className="wrapper d-flex">
                    <div className="brand-and-nav-menu d-flex">
                        {/* ======= Brand ======= */}
                        <Brand />
                        {/* ======= Nav Menu ======= */}
                        <div className="nav-menu">
                            <ul className="d-flex">
                                {
                                    NavMenuData.map(item => (
                                        <li key={item.id} className={item.class}>
                                            <Link to={item.href}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* ======= Buttons ======= */}
                    <div className="btns">
                        <ul className="d-flex">
                            {
                                ButtonsData.map(item => (
                                    item.id === 2 ? (
                                        <li
                                            key={item.id}
                                            onClick={() => clickedBtnId !== item.id ? setClickedBtnId(item.id) : setClickedBtnId("")}
                                            className={clickedBtnId === item.id ? "showDropdown" : ""}
                                        >
                                            {item.content}
                                            <sup>{cart.length}</sup>
                                            <DropdownCart
                                                cart={cart}
                                                books={books}
                                                deleteBook={props.DeleteBook}
                                                wishlistBookIsInCartFalse={props.WishlistBookIsInCartFalse}
                                                makeIsInCartFalse={props.MakeIsInCartFalse}
                                            />
                                        </li>
                                    ) : (
                                        <li
                                            key={item.id}
                                            onClick={() => clickedBtnId !== item.id ? setClickedBtnId(item.id) : setClickedBtnId("")}
                                            className={clickedBtnId === item.id ? "showDropdown" : ""}
                                        >
                                            {item.content}
                                        </li>
                                    )
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        books: state.books
    }
};

export default connect(mapStateToProps,
    { DeleteBook, WishlistBookIsInCartFalse, MakeIsInCartFalse }
)(Header);