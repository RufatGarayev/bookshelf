import Breadcrumb from '../components/Other/Breadcrumb';
import RegisterSection from '../components/Account/RegisterSection';

const Register = () => {
    return (
        <div className="register-content">
            <div className="main">
                <Breadcrumb currentPage={"Resgister"} />
                <RegisterSection />
            </div>
        </div>
    )
}

export default Register;