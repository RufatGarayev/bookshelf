import Breadcrumb from '../components/Other/Breadcrumb';
import AboutUs from '../components/About/AboutUs';

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