import { Label, SearchField } from '@heroui/react';


const SearchBar = ({ search, setSearch }) => {
    return (
        <SearchField
            value={search}
            onChange={setSearch}
            name="search"
        >
            <Label>Search Tutor</Label>
            <SearchField.Group className="w-84">
                <SearchField.SearchIcon />
                <SearchField.Input placeholder="Search tutor name..." />
                <SearchField.ClearButton />
            </SearchField.Group>
        </SearchField>

    );
};

export default SearchBar;