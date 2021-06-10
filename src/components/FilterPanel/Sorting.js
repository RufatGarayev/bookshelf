const Sorting = () => {
    return (
        <div className="sorting">
            <div className="row">
                <div className="col-lg-6">
                    <div className="sorting-area name-price d-flex">
                        <label className="m-0">SORT BY:</label>
                        <select>
                            <option value="default">Default</option>
                            <option value="nameA2Z">Name (A-Z)</option>
                            <option value="nameZ2A">Name (Z-A)</option>
                            <option value="priceLow2High">Price (Low to High)</option>
                            <option value="priceHigh2Low">Price (High to Low)</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sorting-area genre d-flex">
                        <label className="m-0">GENRE:</label>
                        <select>
                            <option value="all">All</option>
                            <option value="classic">Classic</option>
                            <option value="novel">Novel</option>
                            <option value="romance">Romance</option>
                            <option value="historical">Historical</option>
                            <option value="poetry">Poetry</option>
                            <option value="science-fiction">Science Fiction</option>
                            <option value="contemporary-fiction">Contemporary Fiction</option>
                            <option value="industrial-applications">Industrial Applications</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sorting;