import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SideBar from '../components/SideBar';

const DuckDuckSearch = props =>
<div className="duck-duck-search flex">
    <SideBar />
    <div>
        <SearchBar />
        <SearchResults />
    </div>
</div>

export default DuckDuckSearch;