import { useDispatch, connect } from 'react-redux';
import { makeSearch, setSearchPhrase } from '../actions/actions';

const SearchBar = props => {
    const dispatch = useDispatch();

    return (<div className="search-bar flex">
        <input
            value={props.searchPhrase}
            type="text"
            onInput={(e) => dispatch(setSearchPhrase(e.target.value))}
            placeholder="Search"
        >
        </input>
        <button onClick={() => dispatch(makeSearch(props.searchPhrase))}>
            Search
    </button>
    </div>);
}

const mapStateToProps = state => ({ searchPhrase: state.searchPhrase })

export default connect(mapStateToProps)(SearchBar);