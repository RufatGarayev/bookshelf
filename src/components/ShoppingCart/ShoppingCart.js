import Title from '../Other/Title';
import CartTable from './CartTable';
import CartTotals from './CartTotals';
import EmptyAlert from '../Other/EmptyAlert';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ClearCart } from '../../redux/actions/cartActions';
import { MakeIsInCartFalse } from '../../redux/actions/bookActions';
import { CompareBookIsInCartFalse } from '../../redux/actions/compareActions';
import { WishlistBookIsInCartFalse } from '../../redux/actions/wishlistActions';

const ShoppingCart = (props) => {
    const { cart } = props.cart;

    return (
        <section id="shopping-cart">
            <div className="container">
                {
                    cart.length > 0 ? (
                        <>
                            <div className="row">
                                <div className="col-12">
                                    {/* ======= Title ======= */}
                                    <Title
                                        title="Shopping Cart"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="wrapper">
                                        {/* ======= Cart Table ======= */}
                                        <div className="cart-table-wrapper">
                                            <CartTable />
                                        </div>
                                        <div className="bottom-elements d-flex">
                                            {/* ======= Continue Shopping Link ======= */}
                                            <div className="continue-shopping-link">
                                                <Link to="/shop" className="d-flex align-items-center">
                                                    <span><HiArrowNarrowLeft /></span>
                                                    <p>CONTINUE SHOPPING</p>
                                                </Link>
                                            </div>
                                            {/* ======= Clear Button ======= */}
                                            <div className="clear-btn">
                                                <button
                                                    className="d-flex align-items-center"
                                                    onClick={() => {
                                                        props.ClearCart();
                                                        cart.forEach(cartBook => props.MakeIsInCartFalse(cartBook.id));
                                                        cart.forEach(cartBook => props.CompareBookIsInCartFalse(cartBook.id));
                                                        cart.forEach(cartBook => props.WishlistBookIsInCartFalse(cartBook.id));
                                                    }}
                                                >
                                                    <span><RiDeleteBinLine /></span>
                                                    <p>CLEAR SHOPPING CART</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {/* ======= Cart Totals ======= */}
                                    <div className="cart-totals-wrapper">
                                        <CartTotals />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        // ======= Empty Alert ======= //
                        <div className="empty-alert-wrapper">
                            <EmptyAlert
                                icon={<AiOutlineShopping />}
                                title="SHOPPING CART IS EMPTY"
                                paragraph="You have no items in your shopping cart."
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        books: state.books,
        wishlist: state.wishlist,
        compare: state.compare
    }
};

export default connect(mapStateToProps,
    {
        ClearCart, MakeIsInCartFalse,
        CompareBookIsInCartFalse, WishlistBookIsInCartFalse
    }
)(ShoppingCart);