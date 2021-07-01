import Title from '../Other/Title';
import Input from '../SignUp/Input';
import { SocialMediaData } from '../Other/SocialMedia';
import '../../scss/_sign-up.scss';

const SignUp = () => {
    return (
        <section id="sign-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <Title
                            title="NEWSLETTER SIGNUP"
                            description="Sign up for our e-mail and be the first who know our special offers! Furthermore, 
                            we will give a 15% discount on the next order after you sign up."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="sign-up-form">
                            <Input />
                        </div>
                        <div className="social-media d-flex justify-content-center">
                            <ul className="d-flex">
                                {
                                    SocialMediaData.map(item => (
                                        <li key={item.id}>
                                            <a href={item.link} target="__blank">{item.icon}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;