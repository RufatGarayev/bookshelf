import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import BookItem from './BookItem';

SwiperCore.use([Navigation, A11y]);

const CompareSlider = (props) => {
    const { compare } = props;

    return (
        <div className="compare-slider">
            <Swiper
                slidesPerView={1}
                navigation
                breakpoints={{
                    "320": {
                        "slidesPerView": 1,
                        "spaceBetween": 0
                    },
                    "576": {
                        "slidesPerView": 2,
                        "spaceBetween": 0
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 0
                    },
                    "992": {
                        "slidesPerView": 3,
                        "spaceBetween": 0
                    },
                    "1200": {
                        "slidesPerView": 4,
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