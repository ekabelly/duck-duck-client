import { connect } from 'react-redux';

const SearchResults = props => {
    const renderSearchResults = () =>
        props.searchResults.map((searchResult, i) =>
        (<li key={i}>
            <a href={searchResult.url}>
                {searchResult.title}
            </a>
        </li>)
        )

    return (<div>
        <h2>search results</h2>
        <ul>{renderSearchResults()}</ul>
    </div>)
}

const mapStateToProps = state =>
    ({ searchResults: state.search.searchResults[state.search.lastSearch] || [] });

export default connect(mapStateToProps)(SearchResults);;