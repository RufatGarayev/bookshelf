import React from 'react';
import Brand from '../Other/Brand';
import { NavMenuData } from './HeaderData';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import '../../sass/_header.scss';

const Header = (props) => {
    const { cart } = props.cart;

    return (
        <div className="header">
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
                                <Link to="/"><i className="flaticon-search"></i></Link>
                            </li>
                            <li>
                                <Link to="/cart"><i className="flaticon-shopping-bag"></i></Link>
                                <sup>{cart.length}</sup>
                            </li>
                            <li>
                                <Link to="/login"><i className="flaticon-profile"></i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className="flaticon-filter"></i></Link>
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