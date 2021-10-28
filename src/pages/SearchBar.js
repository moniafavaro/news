import { useHistory } from "react-router";
import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState([])
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch()
        history.push(`/search?q=${search}`)
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

   
    
    return (
      <form id="category-search" method="GET" onSubmit={handleSubmit}>
        <input
          type="search"
          name="category"
          id="category"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <input type="submit" value="GO" />
      </form>
    );
}

export default SearchBar