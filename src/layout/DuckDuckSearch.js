import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SideBar from '../components/SideBar';

const DuckDuckSearch = props =>
<div>    
    <SearchBar />
    <div style={{display: 'grid', gridTemplateColumns: '2fr 5fr'}}>
        <SideBar />
        <SearchResults />
    </div>
</div>

export default DuckDuckSearch;