import { AiOutlineShopping } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';
import { BsFilterLeft } from 'react-icons/bs';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { RiLock2Line } from 'react-icons/ri';
import { Link } from "react-router-dom";

// Nav links
export const NavMenuData = [
    { id: 1, title: "Home", href: "/", class: "first-li" },
    { id: 2, title: "About", href: "/about", class: "second-li" },
    { id: 3, title: "Shop", href: "/shop", class: "third-li" },
    { id: 4, title: "Contact", href: "/contact", class: "fourth-li" }
];

// Buttons and Dropdown items
export const ButtonsData = [
    {
        id: 1,
        content:
            <div className="li-content">
                <button>
                    <span><CgSearch /></span>
                </button>
            </div>
    },
    {
        id: 2,
        content:
            <div className="li-content">
                <button>
                    <span><AiOutlineShopping /></span>
                </button>
            </div>
    },
    {
        id: 3,
        content:
            <div className="li-content">
                <button>
                    <span><HiOutlineUser /></span>
                </button>
                <div className="dropdownMenu account">
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
            </div>
    },
    {
        id: 4,
        content:
            <div className="li-content">
                <button>
                    <span className="filter-btn"><BsFilterLeft /></span>
                </button>
                <div className="dropdownMenu monetary-unit">
                    <ul>
                        <li><button>$ USD - US Dollar</button></li>
                        <li><button>€ EUR - Euro</button></li>
                        <li><button>£ GBP - British Pound Sterling</button></li>
                    </ul>
                </div>
            </div>
    }
];