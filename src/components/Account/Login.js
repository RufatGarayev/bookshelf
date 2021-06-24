import Title from '../Other/Title';
import Input from '../Other/Input';
import { Link } from "react-router-dom";

const LoginSection = () => {
    return (
        <section id="login">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Title title="ALREADY REGISTERED?" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="new-customer-wrapper wrapper">
                            <h4>New Customer</h4>
                            <p className="paragraph">
                                By creating an account with our store, you will be able to move through the checkout process faster,
                                store multiple shipping addresses, view and track your orders in your account and more.
                            </p>
                            <Link className="btn-style" to="/register">Create an Account</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login-area account-inputs wrapper">
                            <form>
                                <div className="top-elements">
                                    <h4>Login</h4>
                                    <p className="paragraph">If you have an account with us, please log in.</p>
                                </div>
                                <div className="inputs">
                                    <label htmlFor="username">USERNAME OR E-MAIL *</label>
                                    <Input id="username" placeholder="Enter Username or E-mail" type="text" />
                                    <label htmlFor="password">PASSWORD *</label>
                                    <Input id="password" placeholder="Enter Password" type="password" />
                                </div>
                                <div className="bottom-contents d-flex justify-content-between align-items-center">
                                    <input className="btn-style" type="submit" value="LOGIN" />
                                    <Link className="additional-link" to="/register">Lost your password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginSection;