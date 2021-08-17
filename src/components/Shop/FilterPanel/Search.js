import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        props.searchBook(e.target.value);
        setSearchValue(e.target.value);
    }

    return (
        <div className="search-box">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className="search-bar w-100"
                    placeholder="Seach a Book"
                    value={searchValue}
                    onChange={handleChange}
                />
                <button type="submit">
                    <span><CgSearch /></span>
                </button>
            </form>
        </div>
    )
}

export default Search;