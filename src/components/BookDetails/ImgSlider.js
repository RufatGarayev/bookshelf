import { useState } from 'react';
import img2 from '../../assets/img/books/home-entry/book-02.jpg';
import img3 from '../../assets/img/books/home-entry/book-03.jpg';

const Slider = (props) => {
    const { book } = props;
    const [clickedBtnId, setClickedBtnId] = useState(1);
    const [slideIndex, setSlideIndex] = useState(1);

    const LittleImages = [
        {
            id: 1,
            img: book.img
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        }
    ];

    const BigImages = [
        {
            id: 1,
            img: book.img
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        }
    ];

    return (
        <div className="book-details-slider-wrapper">
            <div className="row">
                <div className="col-4">
                    {/* ======= Little images ======= */}
                    <div className="little-img-wrapper d-flex flex-column justify-content-between">
                        {
                            LittleImages.map(littleImg => (
                                <div
                                    key={littleImg.id}
                                    className={clickedBtnId === littleImg.id ? "img-wrapper active-little-img" : "img-wrapper"}
                                >
                                    <button
                                        onClick={() => {
                                            setClickedBtnId(littleImg.id);
                                            setSlideIndex(littleImg.id);
                                        }}
                                    >
                                        <img className="img-fluid" src={littleImg.img} alt="book" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-8">
                    {/* ======= Big images ======= */}
                    <div className="big-img-wrapper">
                        {
                            BigImages.map(bigImg => (
                                <div key={bigImg.id} className={slideIndex === bigImg.id ? "img-wrapper" : "d-none"}>
                                    <img className="img-fluid" src={bigImg.img} alt="book" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;