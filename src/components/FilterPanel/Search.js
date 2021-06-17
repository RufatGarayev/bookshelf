const Search = (props) => {

    return (
        <div className="search-box">
            <form>
                <input
                    type="text"
                    className="search-bar w-100"
                    placeholder="Seach a Book"
                    onChange={(e) => props.searching(e.target.value)}
                />
                <button type="submit">
                    <i className="flaticon-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;