import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const BackToTopBtn = () => {
    const [show, setShow] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 70) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    const handleClick = () => {
        window[`scrollTo`]({ top: 0 });
    }

    return (
        <div id="back-to-top-btn" className={show ? "show-back-to-top-btn" : ""}>
            <button type="button" onClick={handleClick}>
                <FaAngleUp />
            </button>
        </div>
    )
}

export default BackToTopBtn;