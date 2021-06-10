const Search = () => {
    return (
        <div className="search-box">
            <form>
                <input
                    type="text"
                    className="search-bar w-100"
                    placeholder="Seach a Book"
                />
                <button type="submit">
                    <i className="flaticon-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;