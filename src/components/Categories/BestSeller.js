import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { BestSellerBooks } from '../Other/BooksData';
import Title from '../Other/Title';
import { RiShoppingBagLine } from 'react-icons/ri';
import { ImEye } from 'react-icons/im';

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
                // loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    BestSellerBooks.map((book) => (
                        <SwiperSlide key={book.id} >
                            <div className="book-item d-flex">
                                <div className="img-wrapper">
                                    <img className="img-fluid" src={book.img} alt="book" />
                                </div>
                                <div className="bottom-content">
                                    <div className="rating">
                                        <span>{book.rating}</span>
                                    </div>
                                    <div className="title-and-author">
                                        <h6>{book.title}</h6>
                                        <p>{book.author}</p>
                                    </div>
                                    <div className="add-to-cart-btn">
                                        <button type="button" className="d-flex">
                                            <span><RiShoppingBagLine /></span>
                                            <p>Add To Cart</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </div>
    );
};

export default BestSeller;