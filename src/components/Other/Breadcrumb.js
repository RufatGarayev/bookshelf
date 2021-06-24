import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
    return (
        <div className="breadcrumb">
            <div className="container">
                <ul className="breadcrumb-content d-flex m-0 p-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <span>{currentPage}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;