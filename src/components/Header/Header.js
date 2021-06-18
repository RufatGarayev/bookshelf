import React, { useState } from 'react';
import Brand from '../Other/Brand';
import { NavMenuData } from './HeaderData';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { AiOutlineShopping } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';
import { BsFilterLeft } from 'react-icons/bs';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { RiLock2Line } from 'react-icons/ri';
import '../../sass/_header.scss';

const Header = (props) => {
    const { cart } = props.cart;
    const [shadow, setShadow] = useState(false);
    const [showMonetaryUnit, setShowMonetaryUnit] = useState(false);
    const [showAccount, setShowAccount] = useState(false);

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
                                        <li className={item.class} key={item.id}>
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
                            <li>
                                <button onClick={e => e.preventDefault()}>
                                    <span><CgSearch /></span>
                                </button>
                            </li>
                            <li>
                                <Link to="/cart"><span><AiOutlineShopping /></span></Link>
                                <sup>{cart.length}</sup>
                            </li>
                            <li>
                                <button onClick={() => setShowAccount(!showAccount)}>
                                    <span><HiOutlineUser /></span>
                                </button>
                                <div className={showAccount ? "showDropdown dropdownMenu account" : "dropdownMenu account"}>
                                    <ul>
                                        <li>
                                            <Link to="/cart"><span><AiOutlineShopping /></span> Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="#/"><span><FaRegHeart /></span> Wishlist</Link>
                                        </li>
                                        <li>
                                            <Link to="#/"><span><FaBalanceScale /></span> Compare</Link>
                                        </li>
                                        <li>
                                            <Link to="/login"><span><RiLock2Line /></span> Log In</Link>
                                        </li>
                                        <li>
                                            <Link to="/register"><span><HiOutlineUser /></span> Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <button onClick={() => { setShowMonetaryUnit(!showMonetaryUnit); }}>
                                    <span className="filter-btn"><BsFilterLeft /></span>
                                </button>
                                <div className={showMonetaryUnit ? "showDropdown dropdownMenu monetary-unit" : "dropdownMenu monetary-unit"}>
                                    <ul>
                                        <li><button>$ USD - US Dollar</button></li>
                                        <li><button>€ EUR - Euro</button></li>
                                        <li><button>£ GBP - British Pound Sterling</button></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(Header);