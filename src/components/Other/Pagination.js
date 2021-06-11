const Pagination = () => {
    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link arrow" href="#/" aria-label="Previous">
                        <span aria-hidden="true">﹤</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#/">1</a></li>
                <li className="page-item"><a className="page-link" href="#/">2</a></li>
                <li className="page-item"><a className="page-link" href="#/">3</a></li>
                <li className="page-item">
                    <a className="page-link arrow" href="#/" aria-label="Next">
                        <span aria-hidden="true">﹥</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;