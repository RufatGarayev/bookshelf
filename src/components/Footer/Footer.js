import Brand from '../Other/Brand';
import Copywriter from './Copywriter';
import Payment from './Payment';
import '../../scss/_footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-left d-flex">
                                <Brand />
                                <Copywriter />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-right d-flex">
                                <Payment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;