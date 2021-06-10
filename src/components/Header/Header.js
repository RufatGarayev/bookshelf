import React from 'react';
import Brand from '../Other/Brand';
import { NavMenuData, NavBtnData } from './HeaderData';
import { Link } from "react-router-dom";
import '../../sass/_header.scss';

const Header = () => {
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
                            {
                                NavBtnData.map(btn => (
                                    <li key={btn.id}>
                                        <a href="#/">{btn.icon}</a>
                                        {btn.sup}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;