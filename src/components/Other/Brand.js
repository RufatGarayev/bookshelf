import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="brand">
            <Link
                to="/"
                onClick={() => window.location.href = "/"}
            >
                <h4>bookshelf</h4>
            </Link>
        </div>
    )
}

export default Brand;