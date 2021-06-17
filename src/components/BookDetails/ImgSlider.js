import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import img1 from '../../assets/img/books/home-entry/book-02.jpg';
import img2 from '../../assets/img/books/home-entry/book-03.jpg';

SwiperCore.use([Navigation, A11y]);

const Slider = (props) => {
    const { book } = props;

    return (
        <div className="book-details-slider-wrapper">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
            >
                <div className="book-slider">
                    <SwiperSlide>
                        <div className="wrapper">
                            <div className="img-wrapper">
                                <img className="img-fluid" src={book.img} alt={book.title} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrapper">
                            <div className="img-wrapper">
                                <img className="img-fluid" src={img1} alt="book1" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrapper">
                            <div className="img-wrapper">
                                <img className="img-fluid" src={img2} alt="book2" />
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper >
        </div>
    );
};

export default Slider;