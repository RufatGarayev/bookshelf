const Sorting = (props) => {
    return (
        <div className="sorting">
            <div className="row">
                <div className="col-lg-6">
                    {/* ======= Sorting by Name and Price ======= */}
                    <div className="sorting-area name-price d-flex">
                        <label className="m-0">SORT BY:</label>
                        <select
                            onChange={(e) => props.Sorting(e.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="nameA">Name (A-Z)</option>
                            <option value="nameZ">Name (Z-A)</option>
                            <option value="lowPrice">Price (Low to High)</option>
                            <option value="highPrice">Price (High to Low)</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* ======= Sorting by Genre ======= */}
                    <div className="sorting-area genre d-flex">
                        <label className="m-0">GENRE:</label>
                        <select>
                            <option value="All">All</option>
                            <option value="Classic">Classic</option>
                            <option value="Novel">Novel</option>
                            <option value="Romance">Romance</option>
                            <option value="Historical">Historical</option>
                            <option value="Poetry">Poetry</option>
                            <option value="ScienceFiction">Science Fiction</option>
                            <option value="ContemporaryFiction">Contemporary Fiction</option>
                            <option value="IndustrialApplications">Industrial Applications</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sorting;