import { connect, useDispatch } from 'react-redux';
import { makeSearch } from '../actions/actions';

const SideBar = props => {
    const dispatch = useDispatch();
    const searchResultDiv = query =>
        <li 
        style={{cursor: 'pointer', margin: '10px'}}
        onClick={() => dispatch(makeSearch(query))} 
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

    return <div>
        <h4> Previous Searches </h4>
        {renderSearchResults()}
    </div>
}

const mapStateToProps = state => ({ searchResults: state.search.searchResults || [] });

export default connect(mapStateToProps)(SideBar);
