import Title from '../../Other/Title';
import CartTable from './CartTable';
import CartTotals from './CartTotals';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ClearCart } from '../../../redux/actions/cartActions';
import '../../../sass/_account.scss';

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
                                    <Title
                                        title="Shopping Cart"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="wrapper">
                                        <div className="cart-table-wrapper">
                                            <CartTable />
                                        </div>
                                        <div className="bottom-elements d-flex">
                                            <div className="continue-shopping-link">
                                                <Link to="/shop" className="d-flex align-items-center">
                                                    <i className="flaticon-left-arrow mr-2"></i>
                                                    <p className="m-0">CONTINUE SHOPPING</p>
                                                </Link>
                                            </div>
                                            <div className="clear-btn">
                                                <button className="d-flex align-items-center" onClick={() => props.ClearCart()}>
                                                    <i className="flaticon-delete mr-2"></i>
                                                    <p className="m-0">CLEAR SHOPPING CART</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cart-totals-wrapper">
                                        <CartTotals />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="cart-is-empty-wrapper">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="cart-is-empty">
                                        <div className="icon-area d-flex justify-content-center">
                                            <i className="flaticon-shopping-bag"></i>
                                        </div>
                                        <div className="title-and-paragraph text-center">
                                            <h1>SHOPPING CART IS EMPTY</h1>
                                            <p className="paragraph">You have no items in your shopping cart.</p>
                                        </div>
                                        <div className="continue-btn">
                                            <Link to="/shop" className="btn-style btn-style-2">CONTINUE SHOPPING</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps, { ClearCart })(ShoppingCart);