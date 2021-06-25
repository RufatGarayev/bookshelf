import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Title from '../../Other/Title';
import BookCard from '../../BookCard/BookCard';

SwiperCore.use([Pagination, A11y]);

const BestSeller = (props) => {
    return (
        <div className="best-seller-wrapper">
            <div className="row">
                <div className="col-12">
                    <Title
                        title="Best Seller"
                        bottomTitle="Top View In This Week"
                    />
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    "320": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    },
                    "992": {
                        "slidesPerView": 4,
                        "spaceBetween": 25
                    },
                    "1200": {
                        "slidesPerView": 4,
                        "spaceBetween": 30
                    }
                }}
            >
                <div className="best-seller">
                    {
                        props.books.map((book) => (
                            book.category === "Best Seller" ?
                                <SwiperSlide key={book.id} >
                                    <BookCard book={book} />
                                </SwiperSlide> : ""
                        ))
                    }
                </div>
            </Swiper >
        </div>
    );
};

export default BestSeller;