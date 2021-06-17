import React, { useState } from 'react';
import Brand from '../Other/Brand';
import { NavMenuData } from './HeaderData';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { AiOutlineShopping } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';
import { BsFilterLeft } from 'react-icons/bs';
import '../../sass/_header.scss';

const Header = (props) => {
    const { cart } = props.cart;
    const [shadow, setShadow] = useState(false);

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
                                <Link to="/"><span><CgSearch /></span></Link>
                            </li>
                            <li>
                                <Link to="/cart"><span><AiOutlineShopping /></span></Link>
                                <sup>{cart.length}</sup>
                            </li>
                            <li>
                                <Link to="/login"><span><HiOutlineUser /></span></Link>
                            </li>
                            <li>
                                <Link to="/"><span className="filter-btn"><BsFilterLeft /></span></Link>
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