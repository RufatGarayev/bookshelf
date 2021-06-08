import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Title from '../Other/Title';
import { BestSellerBooks } from '../Other/BooksData';
import BookCard from '../Other/BookCard';

SwiperCore.use([A11y]);

const BestSeller = () => {
    return (
        <div className="best-seller">
            <Title
                title="Best Seller"
                bottomTitle="Top View In This Week"
            />
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
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
                        "spaceBetween": 50
                    }
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    BestSellerBooks.map((book) => (
                        <SwiperSlide key={book.id} >
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </div>
    );
};

export default BestSeller;