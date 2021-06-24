import { connect } from 'react-redux';
import Title from '../Other/Title';
import CompareSlider from './CompareSlider';
import EmptyAlert from '../Other/EmptyAlert';
import { FaBalanceScale } from 'react-icons/fa';

const ComparingArea = (props) => {
    const { compare } = props.compare;

    return (
        <section id="compare">
            <div className="container">
                {
                    compare.length > 0 ? (
                        <>
                            <div className="row">
                                <div className="col-12">
                                    <Title title={`COMPARING ${compare.length} PRODUCTS`} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="wrapper">
                                        <div className="books"></div>
                                        <div className="properties">
                                            <div className="title">
                                                <p>Title</p>
                                            </div>
                                            <div className="price">
                                                <p>Price</p>
                                            </div>
                                            <div className="description box">
                                                <p>Description</p>
                                            </div>
                                            <div className="genre box">
                                                <p>Genre</p>
                                            </div>
                                            <div className="rating box">
                                                <p>Rating</p>
                                            </div>
                                            <div className="addToCartBtn box"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="compare-slider-wrapper">
                                        <CompareSlider compare={compare} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="empty-alert-wrapper">
                            <EmptyAlert
                                icon={<FaBalanceScale />}
                                title="COMPARE IS EMPTY"
                                paragraph="No products were added to the Compare."
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(ComparingArea);