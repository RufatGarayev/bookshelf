import Title from '../../Other/Title';
import CartTable from './CartTable';
import CartTotals from './CartTotals';
import '../../../sass/_account.scss';

const ShoppingCart = () => {
    return (
        <section id="shopping-cart">
            <div className="container">
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
                                    <a href="/#" className="d-flex align-items-center">
                                        <i className="flaticon-left-arrow mr-2"></i>
                                        <p className="m-0">CONTINUE SHOPPING</p>
                                    </a>
                                </div>
                                <div className="clear-btn">
                                    <a href="/#" className="d-flex align-items-center">
                                        <i className="flaticon-delete mr-2"></i>
                                        <p className="m-0">CLEAR SHOPPING CART</p>
                                    </a>
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
            </div>
        </section>
    )
}

export default ShoppingCart;