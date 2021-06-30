import React, { useState } from 'react';
import Brand from '../Other/Brand';
import { NavMenuData, ButtonsData } from './HeaderData';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { DeleteBook } from '../../redux/actions/cartActions';
import { WishlistBookIsInCartFalse } from '../../redux/actions/wishlistActions';
import { CompareBookIsInCartFalse } from '../../redux/actions/compareActions';
import { MakeIsInCartFalse } from '../../redux/actions/bookActions';
import DropdownCart from './DropdownCart';
import '../../sass/_header.scss';

const Header = (props) => {
    const { cart } = props.cart;
    const { books } = props.books;
    const { wishlist } = props.wishlist;
    const { compare } = props.compare;
    const [shadow, setShadow] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [clickedBtnId, setClickedBtnId] = useState("");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    });

    return (
        <>
            <div className={shadow ? "header-shadow header" : "header"}>
                <div className="navbar">
                    <div className="container">
                        <div className="wrapper d-flex">
                            {/* ======= Hamburger Button ======= */}
                            <div className="hamburger-wrapper">
                                <div
                                    className={hamburger ? "hamburger-btn change" : "hamburger-btn"}
                                    onClick={() => { setHamburger(!hamburger) }}
                                >
                                    <div id="bar1" className="bar"></div>
                                    <div id="bar2" className="bar"></div>
                                    <div id="bar3" className="bar"></div>
                                </div>
                            </div>
                            <div className="brand-and-nav-menu d-flex">
                                {/* ======= Brand ======= */}
                                <Brand />
                                {/* ======= Nav Menu ======= */}
                                <div className={hamburger ? "nav-menu-wrapper show-nav-menu" : "nav-menu-wrapper"}>
                                    <ul className="d-flex nav-menu">
                                        {
                                            NavMenuData.map(item => (
                                                <li key={item.id} className={item.class}>
                                                    {
                                                        <Link
                                                            to={item.href}
                                                            onClick={() => window.location.href = item.href}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            {/* ======= Buttons ======= */}
                            <div className="btns">
                                <ul className="d-flex btns-ul">
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
                                                        compareBookIsInCartFalse={props.CompareBookIsInCartFalse}
                                                        makeIsInCartFalse={props.MakeIsInCartFalse}
                                                    />
                                                </li>
                                            ) : item.id === 3 ? (
                                                <li
                                                    key={item.id}
                                                    onClick={() => clickedBtnId !== item.id ? setClickedBtnId(item.id) : setClickedBtnId("")}
                                                    className={clickedBtnId === item.id ? "showDropdown" : ""}
                                                >
                                                    {item.content}
                                                    <sup className="wishlist-sup">{wishlist.length}</sup>
                                                </li>
                                            ) : item.id === 4 ? (
                                                <li
                                                    key={item.id}
                                                    onClick={() => clickedBtnId !== item.id ? setClickedBtnId(item.id) : setClickedBtnId("")}
                                                    className={clickedBtnId === item.id ? "showDropdown" : ""}
                                                >
                                                    {item.content}
                                                    <sup className="compare-sup">{compare.length}</sup>
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
            </div>

            <div className="brand-wrapper">
                <Brand />
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        books: state.books,
        compare: state.compare,
        wishlist: state.wishlist
    }
};

export default connect(mapStateToProps,
    {
        DeleteBook, WishlistBookIsInCartFalse,
        MakeIsInCartFalse, CompareBookIsInCartFalse
    }
)(Header);