import { CgSearch } from 'react-icons/cg';

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
                    <span><CgSearch /></span>
                </button>
            </form>
        </div>
    )
}

export default Search;