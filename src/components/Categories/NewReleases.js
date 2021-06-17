import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Title from '../Other/Title';
import { BooksData } from '../Books/BooksData';
import BookCard from '../Books/BookCard';

SwiperCore.use([Pagination, A11y]);

const NewReleases = () => {
    return (
        <div className="new-releases-wrapper">
            <div className="row">
                <div className="col-12">
                    <Title
                        title="New Releases"
                        bottomTitle="In This Week"
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
                <div className="new-releases">
                    {
                        BooksData.map((book) => (
                            book.category === "New Releases" ?
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

export default NewReleases;