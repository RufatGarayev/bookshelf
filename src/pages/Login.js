import Breadcrumb from '../components/Other/Breadcrumb';
import LoginSection from '../components/Account/Login';
import '../scss/_account.scss';

const Login = () => {
    return (
        <div className="login-content">
            <div className="main">
                <Breadcrumb currentPage={"Login"} />
                <LoginSection />
            </div>
        </div>
    )
}

export default Login;