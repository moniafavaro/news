import { useHistory } from "react-router";
import { useState } from "react";
import { set } from "mongoose";

const SearchBar = () => {
    const [search, setSearch] = useState()
    const categories = ['business', 'entertainment', 'health', 'science', 'sports','technology']
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
 
      for (let i = 0; i < categories.length; i++) {
        if (search === categories[i]) {
          history.push(`/search?q=${search}`)
          setSearch('')
        } 
        else {
          console.log("Do Nothing",search)
          setSearch('')
        }
      } 
      setSearch('')
    }

  const handleChange = (event) => {
      setSearch(event.target.value.toLowerCase());
   }

   
    
    return (
      <>
      <form id="category-search" method="GET" onSubmit={handleSubmit}>
        <input
          type="search"
          name="category"
          id="category"
          placeholder="Search by Category"
          value={search}
          onChange={handleChange}
        />  
        <input className="go-button" type="submit" value="GO" />
      </form>
          <select className="search-options">
        {categories.filter((val) => {
          if (search === "") {
            return val 
          } else if (val.toLowerCase().includes(search)) {
            return val
          }
        }).map((val, key) => {
          return (
             <option 
             className="option" 
             key={key}
             onClick={(event) => {
              event.preventDefault()
              setSearch(event.target.value)
             }}
             onSubmit={handleSubmit}
             >{val}</option>
          )
        })
        }
        </select>
        </>
    );
}

export default SearchBar