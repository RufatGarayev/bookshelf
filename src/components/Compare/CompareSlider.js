import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import BookItem from '../Compare/BookItem';

SwiperCore.use([Navigation, A11y]);

const CompareSlider = (props) => {
    const { compare } = props;

    return (
        <div className="compare-slider">
            <Swiper
                navigation
                breakpoints={{
                    "320": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "768": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "992": {
                        "slidesPerView": 3,
                        "spaceBetween": 0
                    },
                    "1200": {
                        "slidesPerView": 3,
                        "spaceBetween": 0
                    }
                }}
            >
                <div className="compare-books">
                    {
                        compare.map(book => (
                            <SwiperSlide key={book.id}>
                                <BookItem book={book} />
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper >
        </div>
    );
};

export default CompareSlider;