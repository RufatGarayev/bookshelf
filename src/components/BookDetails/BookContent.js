import Slider from './Slider';
import Info from './Info';

const BookContent = (props) => {
    const { book } = props;

    return (
        <div className="book-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Slider book={book} />
                    </div>
                    <div className="col-lg-6">
                        <Info book={book} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookContent;