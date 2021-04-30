import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeSearch } from '../actions/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchPhrase, setSearchPhrase] = useState();

    return (<div className="searchbar flex">
        <input
            type="text"
            onInput={(e) => setSearchPhrase(e.target.value)}
            placeholder="Search"
        >
        </input>
        <button onClick={() => dispatch(makeSearch(searchPhrase))}>
            Search
    </button>
    </div>);
}

export default SearchBar;