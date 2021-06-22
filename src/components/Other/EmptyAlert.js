import { Link } from "react-router-dom";

const EmptyAlert = ({ title, paragraph, icon }) => {
    return (
        <div className="empty-alert-content">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="cart-is-empty">
                        <div className="icon-area d-flex justify-content-center">
                            <span>{icon}</span>
                        </div>
                        <div className="title-and-paragraph text-center">
                            <h1>{title}</h1>
                            <p className="paragraph">{paragraph}</p>
                        </div>
                        <div className="continue-btn text-center">
                            <Link to="/shop" className="btn-style btn-style-2">CONTINUE SHOPPING</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyAlert;