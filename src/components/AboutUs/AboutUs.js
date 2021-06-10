import Title from '../Other/Title';
import Watch from '../../assets/img/other/watch.jpg';

const AboutUs = () => {
    return (
        <section id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* ======= Title ======= */}
                        <Title title="Brief Information About Us" />
                    </div>
                </div>
                <div className="about-us-contents">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-5">
                                    {/* ======= Image ======= */}
                                    <div className="img">
                                        <img className="img-fluid" src={Watch} alt="watch" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    {/* ======= Text ======= */}
                                    <div className="text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Porro modi eaque dolor nihil asperiores sunt provident,
                                            quidem, quod neque, ducimus culpa dignissimos cumque!
                                            Quibusdam quis quas impedit? Recusandae, eius aut.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Porro modi eaque dolor nihil asperiores sunt provident,
                                            quidem, quod neque, ducimus culpa dignissimos cumque!
                                            Quibusdam quis quas impedit? Recusandae, eius aut.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Porro modi eaque dolor nihil asperiores sunt provident,
                                            Quibusdam quis quas impedit? Recusandae, eius aut.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Porro modi eaque dolor nihil asperiores sunt provident,
                                            quidem, quod neque, ducimus culpa dignissimos cumque!
                                            Quibusdam quis quas impedit? Recusandae, eius aut.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Porro modi eaque dolor nihil asperiores sunt provident,
                                            quidem, quod neque, ducimus culpa dignissimos cumque!
                                            Quibusdam quis quas impedit? Recusandae, eius aut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;