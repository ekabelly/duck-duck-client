import { connect, useDispatch } from 'react-redux';

import { makeSearch, setSearchPhrase } from '../actions/actions';

const SideBar = props => {
    const dispatch = useDispatch();

    const dispatchSearch = query => {
        dispatch(setSearchPhrase(query));
        dispatch(makeSearch(query));
    }

    const searchResultDiv = query =>
        <li
        className="past-query"
        onClick={() => dispatchSearch(query)} 
        key={query}
        >
            {query}
        </li>

    const renderSearchResults = () => {
        const res = [];
        for (const query of Object.keys(props.searchResults)) {
            res.push(searchResultDiv(query));
        }
        return <ul>{res}</ul>;
    }

    return <div className="side-bar">
        <h4> Previous Searches </h4>
        {renderSearchResults()}
    </div>
}

const mapStateToProps = state => ({ searchResults: state.search.searchResults || [] });

export default connect(mapStateToProps)(SideBar);
