import Title from '../Other/Title';
import Input from '../Other/Input';
import { Link } from "react-router-dom";

const RegisterSection = () => {
    return (
        <section id="register">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Title title="CREATE AN ACCOUNT" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="register-area account-inputs wrapper">
                            <form>
                                <div className="top-elements">
                                    <h4>PERSONAL INFORMATION</h4>
                                </div>
                                <div className="inputs">
                                    <label htmlFor="firstname">FIRST NAME *</label>
                                    <Input id="firstname" placeholder="Enter First Name" type="text" />
                                    <label htmlFor="lastname">LAST NAME *</label>
                                    <Input id="lastname" placeholder="Enter Last Name" type="text" />
                                    <label htmlFor="email">E-MAIL *</label>
                                    <Input id="email" placeholder="Enter E-mail" type="email" />
                                    <label htmlFor="password">PASSWORD *</label>
                                    <Input id="password" placeholder="Enter Password" type="password" />
                                </div>
                                <div className="bottom-contents d-flex justify-content-between align-items-center">
                                    <input className="btn-style" type="submit" value="CREATE" />
                                    <div>
                                        <span className="paragraph">or</span>
                                        <Link className="additional-link" to="/shop">Return to Store</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterSection;