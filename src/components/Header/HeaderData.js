import { HiOutlineUser } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { BsFilterRight } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri';

// Buttons
export const NavBtnData = [
    { id: 1, icon: <FiSearch /> },
    { id: 2, icon: <RiShoppingBagLine />, sup: <sup>9</sup> },
    { id: 3, icon: <HiOutlineUser /> },
    { id: 4, icon: <BsFilterRight /> }
];

// Nav items
export const NavMenuData = [
    { id: 1, title: "Home", href: "#home", class: "first-li" },
    { id: 2, title: "About", href: "#about", class: "second-li" },
    { id: 3, title: "Shop", href: "#resume", class: "third-li" },
    { id: 4, title: "Contact", href: "#portfolio", class: "fourth-li" }
];