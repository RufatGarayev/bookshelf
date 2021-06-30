import { connect } from 'react-redux';
import Title from '../Other/Title';
import BookCard from '../BookCard/BookCard';
import EmptyAlert from '../Other/EmptyAlert';
import { FaRegHeart } from 'react-icons/fa';

const WishListBooks = (props) => {
    const { wishlist } = props.wishlist;

    return (
        <section id="wishlist">
            <div className="container">
                {
                    wishlist.length > 0 ? (
                        <>
                            <div className="row">
                                <div className="col-12">
                                    <Title title="Wishlist" />
                                </div>
                            </div>
                            <div className="row">
                                {
                                    wishlist.map(book => (
                                        <div key={book.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <BookCard book={book} />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div className="empty-alert-wrapper">
                            <EmptyAlert
                                icon={<FaRegHeart />}
                                title="WISHLIST IS EMPTY"
                                paragraph="No products were added to the wishlist."
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

export default connect(mapStateToProps)(WishListBooks);