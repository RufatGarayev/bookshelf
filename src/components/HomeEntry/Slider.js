import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { EntrySlideData } from './EntrySlideData';

SwiperCore.use([Navigation, Pagination, A11y]);

const Slider = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                EntrySlideData.map(book => (
                    <SwiperSlide key={book.id}>
                        <div className="container">
                            <div className="slide-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="left-content">
                                            <h3>{book.author}</h3>
                                            <h1>{book.title}</h1>
                                            <p>{book.description}</p>
                                            <div className="link">
                                                <a href="#/">Shop Now!</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-content d-flex">
                                            <img className="img-fluid" src={book.img} alt="book" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Slider;