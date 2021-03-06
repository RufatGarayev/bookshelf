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
    { id: 2, title: "Shop", href: "/shop", class: "third-li" },
    { id: 3, title: "Contact", href: "/contact", class: "fourth-li" }
];

// Buttons and Dropdown items
export const ButtonsData = [
    {
        id: 1,
        content:
            <div className="li-content">
                <button>
                    <span className="search-icon"><CgSearch /></span>
                </button>
            </div>
    },
    {
        id: 2,
        content:
            <div className="li-content">
                <button>
                    <span className="shopping-icon"><AiOutlineShopping /></span>
                </button>
            </div>
    },
    {
        id: 3,
        content:
            <div className="li-content">
                <Link to="/wishlist">
                    <span><FaRegHeart /></span>
                </Link>
            </div>
    },
    {
        id: 4,
        content:
            <div className="li-content">
                <Link to="/compare">
                    <span><FaBalanceScale /></span>
                </Link>
            </div>
    },
    {
        id: 5,
        content:
            <div className="li-content">
                <button>
                    <span><HiOutlineUser /></span>
                </button>
                <div className="dropdownMenu account">
                    <ul>
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
        id: 6,
        content:
            <div className="li-content">
                <button>
                    <span className="filter-btn"><BsFilterLeft /></span>
                </button>
                <div onClick={(e) => e.stopPropagation()} className="dropdownMenu monetary-unit">
                    <ul>
                        <li><button>$ USD - US Dollar</button></li>
                        <li><button>??? EUR - Euro</button></li>
                        <li><button>?? GBP - British Pound Sterling</button></li>
                    </ul>
                </div>
            </div>
    }
];