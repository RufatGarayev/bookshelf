import ImgSlider from './ImgSlider';
import Info from './Info';
import { SocialMediaData } from '../Other/SocialMedia';

const BookContent = (props) => {
    const { book } = props;

    return (
        <section id="book-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ImgSlider book={book} />
                    </div>
                    <div className="col-lg-6">
                        <Info book={book} />
                    </div>
                </div>
            </div>
            <div className="social-media-wrapper">
                <div className="social-media d-flex justify-content-center">
                    <ul className="d-flex justify-content-between">
                        {
                            SocialMediaData.map(item => (
                                <li key={item.id}>
                                    <a href={item.link}>{item.icon}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BookContent;