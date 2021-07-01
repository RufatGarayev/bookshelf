import Breadcrumb from '../components/Other/Breadcrumb';
import AboutUs from '../components/About/AboutUs';
import '../scss/_about.scss';

const About = () => {
    return (
        <div className="about-content">
            <div className="main">
                <Breadcrumb currentPage={"About"} />
                <AboutUs />
            </div>
        </div>
    )
}

export default About;