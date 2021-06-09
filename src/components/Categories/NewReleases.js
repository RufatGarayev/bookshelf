import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Title from '../Other/Title';
import { BooksData } from '../Other/BooksData';
import BookCard from '../Other/BookCard';

SwiperCore.use([A11y]);

const NewReleases = () => {
    return (
        <div className="new-releases-wrapper">
            <Title
                title="New Releases"
                bottomTitle="In This Week"
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