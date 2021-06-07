import React from 'react';
import Brand from '../Other/Brand';
import { NavMenuData, NavBtnData } from './HeaderData';
import '../../sass/_header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper d-flex">
                    <div className="brand-and-nav-menu d-flex">
                        <Brand />
                        <div className="nav-menu">
                            <ul className="d-flex">
                                {
                                    NavMenuData.map(item => (
                                        <li className={item.class} key={item.id}>
                                            <a href={item.href}>{item.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
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
        </header>
    )
}

export default Header;