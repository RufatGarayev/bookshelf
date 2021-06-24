import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';
import BookCard from '../BookCard/BookCard';
import { BooksData } from '../../data';
import Title from '../Other/Title';

SwiperCore.use([Pagination, A11y]);

const RelatedBooks = (props) => {
    const { book } = props;

    console.log(book)

    return (
        <section id="related-books-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Title
                            title="Related Books"
                        />
                    </div>
                </div>
                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        "320": {
                            "slidesPerView": 1,
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
                    <div className="related-books-slider">
                        {
                            BooksData.map(relatedBook => (
                                relatedBook.category === book.category && relatedBook.id !== book.id ? (
                                    <SwiperSlide key={relatedBook.id}>
                                        <div className="related-books">
                                            <BookCard book={relatedBook} />
                                        </div>
                                    </SwiperSlide>
                                ) : (null)
                            ))
                        }
                    </div>
                </Swiper >
            </div>
        </section>
    );
};

export default RelatedBooks;