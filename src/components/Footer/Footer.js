import '../../sass/_footer.scss';
import Brand from '../Other/Brand';
import Copywriter from './Copywriter';
import Payment from './Payment';

const Footer = () => {
    return (
        <footer>
            <div className="container">
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
        </footer>
    )
}

export default Footer;