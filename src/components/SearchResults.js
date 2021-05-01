import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import reactStringReplace from 'react-string-replace';

const SearchResults = props => {
    const [paging, setPaging] = useState({ pages: null, page: 1, itemsPerPage: 10 });

    useEffect(() => {
        setPaging(pagingState => ({
            ...pagingState,
            page: 1,
            pages: Math.ceil((props.searchResults || []).length / pagingState.itemsPerPage)
        }));
    }, [props.searchResults]);

    const markQuery = searchResultTitle => reactStringReplace(searchResultTitle, props.lastSearch,
        (match, i) => (<span key={i} style={{ backgroundColor: 'yellow' }}>{match}</span>))

    const renderSearchResults = () => {
        const res = props.searchResults.map((searchResult, i) =>
        (<li key={i}>
            <a href={searchResult.url}>
                {markQuery(searchResult.title)}
            </a>
        </li>)
        ).slice((paging.page - 1) * paging.itemsPerPage, paging.page * paging.itemsPerPage)
        return res;
    }

    const renderPages = () => {
        if (paging.pages > 0) {
            return Array(paging.pages).fill(null)
                .map((page, index) =>
                    <li key={index} onClick={() => setPaging({...paging, page: index + 1})}>
                        <div className={paging.page === index + 1 ? 'page-btn' : 'page-btn current-page'}> {index + 1} </div>
                    </li>)
        }
    }

    return (<div className="search-results">
        <h2>search results</h2>
        <ol>{renderSearchResults()}</ol>
        <ul
            style={{ padding: '80px', display: 'flex', justifyContent: 'space-between', listStyleType: 'none', width: 'calc(100% - 160px)' }}
        >
            {renderPages()}
        </ul>
    </div>)
}

const mapStateToProps = state =>
({
    searchResults: state.search.searchResults[state.search.lastSearch] || [],
    lastSearch: state.search.lastSearch
});

export default connect(mapStateToProps)(SearchResults);;